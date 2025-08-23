const { OpenAI } = require('langchain/llms/openai');
const { OPENAI_API_KEY } = require('../config/env');

const llm = new OpenAI({ apiKey: OPENAI_API_KEY });

async function multiLevelPrompting(goal) {
  const clarifiedGoal = await llm.call(`Rewrite as a SMART goal: ${goal}`);
  const taskBreakdown = await llm.call(`Break into tasks: ${clarifiedGoal}`);
  const stepByStepPlan = await llm.call(`Organize tasks into a timeline: ${taskBreakdown}`);
  return { clarifiedGoal, taskBreakdown, stepByStepPlan };
}
module.exports = multiLevelPrompting;
