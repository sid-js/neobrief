import openai from "@/lib/openai";

export default async function (req, res) {
  const prompt  = req.body.prompt;
  if(prompt) {
    try{
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            max_tokens: 140,
            temperature: 0.3
          });
          res.status(200).json({ result: completion.data.choices[0].text });
    } catch (error) {
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
          } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
              error: {
                message: 'An error occurred during your request.',
              }
            });
          }
        }
    }
    
  }
  
