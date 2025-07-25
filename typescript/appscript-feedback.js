function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById("17m5GTVnfefCgRO4j_BuFldrrnBuYVDo6bl4ntvD3fK4").getSheetByName("Form Responses 1");

    const data = JSON.parse(e.postData.contents);

    const row = [
      new Date(),                            // Timestamp
      data["name"] || "",
      data["mobile"] || "",
      data["email"] || "",
      data["company"] || "Cognizant",
      data["date"] || "5/20/2025",
      data["q1"] || "",
      data["q2"] || "",
      data["q3"] || "",
      data["q4"] || "",
      data["q5"] || "",
      data["q6"] || "",
      data["likes"] || "",
      data["topic"] || "MEAN-MERN",
      "Virtual"                              // Training Location (hidden in UI)
    ];

    sheet.appendRow(row);
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
  }
}
