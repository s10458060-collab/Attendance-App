const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz4Wcwx6eAY7mxbT8Kt9s7-6Erm0F8KOhtGH0oE6-VhB4DkbioZMbzPOd0h_BtfR6Sw/exec";

async function searchStudentsApi(queryData) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      // 'text/plain' prevents browser CORS preflight (OPTIONS) requests
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify({
        action: 'searchStudents',
        data: queryData
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Search Error:", error);
    return { success: false, message: "Network error or server unavailable." };
  }
}

async function markAttendance(studentData) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify({
        action: 'markAttendance',
        data: studentData
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Attendance Error:", error);
    return { success: false, message: "Network error or server unavailable." };
  }
}
