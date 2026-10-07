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
async function handleSearch() {
  const errorBanner = document.getElementById('errorBanner'); // Adjust ID to match your error banner element
  const studentResultsContainer = document.getElementById('studentResults');

  // 1. Clear previous error messages before fetching
  if (errorBanner) {
    errorBanner.style.display = 'none';
    errorBanner.innerText = '';
  }

  const queryData = {
    id: document.getElementById('studentIdInput').value,
    firstName: document.getElementById('firstNameInput').value,
    lastName: document.getElementById('lastNameInput').value
  };

  const response = await searchStudentsApi(queryData);

  if (response.success && response.students) {
    // Render student cards
    renderStudentCards(response.students);
  } else {
    // Display error message only if the request failed or returned no results
    if (errorBanner) {
      errorBanner.innerText = response.message || "Error searching student. Please try again.";
      errorBanner.style.display = 'block';
    }
  }
}
