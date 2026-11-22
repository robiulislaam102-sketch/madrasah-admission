const form = document.getElementById('admissionForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (event) => {
  event.preventEvent();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  successMsg.style.display = 'block';
  successMsg.scrollIntoView({ behavior: 'smooth' });
});

function value(id) { return document.getElementById(id).value || '-'; }

document.getElementById('whatsappBtn').addEventListener('click', () => {
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const type = document.querySelector('input[name="studentType"]:checked').value;
  const message = `*অনলাইন ভর্তি আবেদন*\nশিক্ষার্থীর ধরন: ${type}\nশিক্ষাবর্ষ: ${value('session')}\nশ্রেণী: ${value('className')}\nবিভাগ: ${value('department')}\nতারিখ: ${value('applicationDate')}\nনাম: ${value('studentName')}\nজন্ম তারিখ: ${value('dob')}\nপিতা: ${value('fatherName')}\nমাতা: ${value('motherName')}\nগ্রাম: ${value('village')}\nডাকঘর: ${value('postOffice')}\nউপজেলা: ${value('upazila')}\nজেলা: ${value('district')}\nবর্তমান ঠিকানা: ${value('presentAddress')}\nজাতীয়তা: ${value('nationality')}\nঅভিভাবক: ${value('guardianName')}\nমোবাইল: ${value('guardianPhone')}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
});
