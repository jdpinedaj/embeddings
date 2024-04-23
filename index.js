// Import fetch from node-fetch
import fetch from 'node-fetch';
import 'dotenv/config';

// PDF library

//  Read PDF

//  Chunk PDFs into paragraphs

// Store as Vectors

//  Search and return part of queries


//////////////////////////////////

// OpenAI URL and Headers
const OpenAIHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
};

async function createEmbedding(textToEmbed) {
    try {
        const response = await fetch(`https://relay.stagwellmarketingcloud.ai/openai/v1/embeddings`, {
            method: 'POST',
            headers: OpenAIHeaders,
            body: JSON.stringify({
                model: 'text-embedding-3-small',
                input: textToEmbed
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            // Handle HTTP errors
            console.error("HTTP error", response.status, await response.text());
        }
    } catch (error) {
        // Handle other errors
        console.error("Error", error);
    }
}

createEmbedding("Hello, World");