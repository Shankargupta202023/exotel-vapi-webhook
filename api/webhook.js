const axios = require("axios");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const from = req.body.From;

  try {
    await axios.post("https://api.vapi.ai/call", {
      assistantId: "your-assistant-id",  // Replace this
      phoneNumber: from
    });

    res.status(200).send("Calling AI assistant...");
  } catch (err) {
    console.error("Vapi call error:", err.message);
    res.status(500).send("Failed to call AI assistant");
  }
};
