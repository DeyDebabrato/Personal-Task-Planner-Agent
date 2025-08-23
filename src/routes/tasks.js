const express = require('express');
const biasCheck = require('../utils/biasCheck');
const sendEmail = require('../utils/email');
const { OpenAI } = require('langchain/llms/openai');
const { OPENAI_API_KEY } = require('../config/env');

const router = express.Router();
const llm = new OpenAI({ apiKey: OPENAI_API_KEY });

router.post('/plan', async (req,res)=>{
  try {
    const { goal, email } = req.body;
    if (!goal) return res.status(400).json({error:"Goal is required"});
    if (!biasCheck(goal)) return res.status(400).json({error:"Goal contains inappropriate content"});

    const plan = await llm.call(`Break down the goal: ${goal}`);
    if(email) await sendEmail(email,"Your Task Plan",plan);

    res.json({ plan });
  } catch(err) {
    console.error(err);
    res.status(500).json({error:"Something went wrong"});
  }
});
module.exports = router;
