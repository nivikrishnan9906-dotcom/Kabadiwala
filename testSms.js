require("dotenv").config();

const sendSMS = require("./services/smsService");

(async () => {
  const phone = "9080112546";

  const ok = await sendSMS(
    phone,
    "Kabadiwala Connect test SMS. SMS integration is working."
  );

  console.log(ok ? "TEST SMS SENT" : "TEST SMS FAILED");
})();