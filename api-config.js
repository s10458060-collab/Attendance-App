// PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE:
const API_URL = "https://script.google.com/macros/s/AKfycbz4Wcwx6eAY7mxbT8Kt9s7-6Erm0F8KOhtGH0oE6-VhB4DkbioZMbzPOd0h_BtfR6Sw/exec";

// API Fetch Helpers
async function getStudentById(id) {
  const response = await fetch(`${API_URL}?action=getStudent&id=${encodeURIComponent(id)}`);
  return await response.json();
}

async function markAttendance(studentData) {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ action: 'markAttendance', student: studentData })
  });
  return await response.json();
}

async function registerStudent(formData) {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ action: 'register', formData })
  });
  return await response.json();
}

function showAlert(bannerId, msg, type) {
  const banner = document.getElementById(bannerId);
  if (!banner) return;
  if (type === "hide") {
    banner.classList.add('hidden');
    return;
  }
  banner.innerText = msg;
  banner.className = `p-3 rounded-xl text-xs text-center font-semibold ${
    type === 'green' ? 'bg-emerald-100 text-emerald-800' :
    type === 'blue' ? 'bg-indigo-100 text-indigo-800' : 'bg-rose-100 text-rose-800'
  }`;
  banner.classList.remove('hidden');
}
