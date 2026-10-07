const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz4Wcwx6eAY7mxbT8Kt9s7-6Erm0F8KOhtGH0oE6-VhB4DkbioZMbzPOd0h_BtfR6Sw/exec";
async function searchStudentsApi(data) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'searchStudents', data: data })
    });
    
    if (!response.ok) {
      return { success: false, message: `Server error (${response.status})` };
    }
    
    return await response.json();
  } catch (error) {
    console.error("Search API Error:", error);
    return { success: false, message: "Network error or server unavailable." };
  }
}

async function markAttendance(data) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'markAttendance', data: data })
    });

    if (!response.ok) {
      return { success: false, message: `Server error (${response.status})` };
    }

    return await response.json();
  } catch (error) {
    console.error("Attendance API Error:", error);
    return { success: false, message: "Network error or server unavailable." };
  }
}
