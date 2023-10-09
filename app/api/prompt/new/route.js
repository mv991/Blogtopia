import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();
    console.log(prompt,"prompt")
    try {
        await connectToDB();
        const newPrompt = await new Prompt({ creator: userId, prompt, tag });
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        console.log(error,"error")
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}