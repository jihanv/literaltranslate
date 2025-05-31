import { Anthropic } from "@anthropic-ai/sdk"

const SYSTEM_PROMPT = `You are a perfectly bilingual translator fluent in both English and Japanese. You will be given English sentences written by EFL (English as a Foreign Language) learners. Your task is to translate these English sentences literally into Japanese without correcting any of the mistakes. Preserve all grammar errors, awkward phrasing, and unusual word choices. Do not fix or improve the English. Do not produce natural Japanese. Instead, reflect the structure and meaning of the original sentence as closely as possible, even if the result is unnatural or incorrect in Japanese.`

const anthropic = new Anthropic({

    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
})

export async function translateFromClaude(text) {

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `Look at the tex: ${text}. Please translate it literally. Just return the translation` },
        ],
    });
    return msg.content[0].text
}