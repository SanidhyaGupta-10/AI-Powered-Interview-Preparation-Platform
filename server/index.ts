import app from "./src/app";
import "dotenv/config";
import connectDB from "./src/config/db";
import { generateInterviewReport } from "./src/services/ai.service";
import { resume, selfDescription, jobDescription } from "./src/services/temp";

const PORT = process.env.PORT! || 3000;

generateInterviewReport({
    resume,
    selfDescription,
    jobDescription,
})

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});