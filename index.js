import dotenv from "dotenv";
import { AzureOpenAI } from "openai";

dotenv.config();

const apiKey = process.env.API_KEY;
const rawEndpoint = process.env.ENDPOINT;
const deploymentName = process.env.DEPLOYMENT_NAME;
const apiVersion = process.env.API_VERSION || "2025-01-01-preview";

if (!apiKey || !rawEndpoint || !deploymentName) {
  console.error("Missing required environment variables: API_KEY, ENDPOINT, DEPLOYMENT_NAME");
  process.exit(1);
}

const endpoint = rawEndpoint.replace(/\/openai\/deployments\/?$/i, "");

const client = new AzureOpenAI({
  apiKey,
  endpoint,
  deployment: deploymentName,
  apiVersion,
});

async function runTest() {
  try {
    const response = await client.chat.completions.create({
      model: deploymentName,
      messages: [
        { role: 'system', content: 'You are a validation assistant.' },
        { role: 'user', content: 'Hello from the Azure OpenAI Node.js test.' },
      ],
      max_completion_tokens: 100,
    });

    console.log("Connection successful. Response payload:");
    console.log(response.choices?.[0]?.message?.content || JSON.stringify(response, null, 2));
  } catch (error) {
    console.error("Connection failed:", error);
    process.exit(1);
  }
}

runTest();
