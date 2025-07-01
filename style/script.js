function formatText(command) {
  document.execCommand(command, false, null);
}

function changeEmailType() {
  generateEmail(); // Regenerate email when type changes
}

function generateEmail() {
  const emailType = document.getElementById('emailType').value;
  
  switch(emailType) {
    case 'entrance-exam':
      generateEntranceExamEmail();
      break;
    case 'admission-before-grade12':
      generateAdmissionBeforeGrade12Email();
      break;
    case 'admission-no-scholarship':
      generateAdmissionNoScholarshipEmail();
      break;
    case 'admission-after-grade12':
      generateAdmissionAfterGrade12Email();
      break;
    default:
      generateEntranceExamEmail();
  }
}

function generateEntranceExamEmail() {
  const examDate = document.getElementById('examDate').value;
  const confirmationDeadline = document.getElementById('confirmationDeadline').value;
  const contactPhone = document.getElementById('contactPhone').value;
  const universityLocation = document.getElementById('universityLocation').value;
  const examVenueMath = document.getElementById('examVenueMath').value;
  const examVenueEnglish = document.getElementById('examVenueEnglish').value;
  const interviewVenue = document.getElementById('interviewVenue').value;
  const mathSchedule = document.getElementById('mathSchedule').value;
  const englishSchedule = document.getElementById('englishSchedule').value;
  const interviewSchedule = document.getElementById('interviewSchedule').value;
  const officeDepartment = document.getElementById('officeDepartment').value;

  const content = `
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="margin: 0; font-size: 18px; font-weight: bold;">CamTech University</h2>
        <h3 style="margin: 5px 0; font-size: 16px; font-weight: bold;">CamTech Entrance Exam</h3>
        <p style="margin: 5px 0; font-size: 14px;">${examDate}</p>
      </div>
      
      <p style="margin-bottom: 15px;"><strong>Dear <span class="variable-placeholder">{{applicantName}}</span></strong></p>
      
      <p style="margin-bottom: 15px;"><strong>Congratulations!</strong></p>
      
      <p style="margin-bottom: 15px;">Thank you very much for your application to CamTech University. After reviewing your application, we are pleased to inform you that you are shortlisted for the next step. With this, we would like to invite you to take the entrance exam and face-to-face interview on <strong>${examDate}</strong>, at ${universityLocation}.</p>
      
      <p style="margin-bottom: 10px;"><strong>Apply:</strong></p>
      <p style="margin-left: 20px; margin-bottom: 5px;">1) <strong>Major:</strong> <span class="variable-placeholder">{{major}}</span></p>
      <p style="margin-left: 20px; margin-bottom: 15px;">2) <strong>Applied a scholarship:</strong> <span class="variable-placeholder">{{scholarshipStatus}}</span></p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid #000;">
        <tr style="background-color: #f0f0f0;">
          <th style="border: 1px solid #000; padding: 8px; text-align: left;"><strong>Exam subjects (computer test)</strong></th>
          <th style="border: 1px solid #000; padding: 8px; text-align: left;"><strong>Schedule</strong></th>
          <th style="border: 1px solid #000; padding: 8px; text-align: left;"><strong>Venue</strong></th>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;"><strong>Mathematics & IQ (90 minutes)</strong></td>
          <td style="border: 1px solid #000; padding: 8px;">${mathSchedule}</td>
          <td style="border: 1px solid #000; padding: 8px;">${examVenueMath}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;"><strong>English (60 minutes)</strong></td>
          <td style="border: 1px solid #000; padding: 8px;">${englishSchedule}</td>
          <td style="border: 1px solid #000; padding: 8px;">${examVenueEnglish}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;"><strong>Interview (15 minutes)</strong></td>
          <td style="border: 1px solid #000; padding: 8px;">${interviewSchedule}</td>
          <td style="border: 1px solid #000; padding: 8px;">${interviewVenue}</td>
        </tr>
      </table>
      
      <p style="margin-bottom: 10px;">• If you hold a valid TOEFL iBT score of 60 or an IELTS score of 5.5 on the overall band, the English test is waived.</p>
      <p style="margin-bottom: 15px;">• If you got an grade A in mathematics from a national exam, the math test is waived.</p>
      
      <p style="margin-bottom: 10px;"><strong>Please note:</strong></p>
      <ul style="margin-bottom: 15px; padding-left: 20px;">
        <li>Arrive at CamTech a half hour before your schedule starts</li>
        <li>Bring your current student ID card or national ID card.</li>
        <li>Bring your National Grade 12 results if you have graduated.</li>
        <li>Bring a portfolio or achievement certificate with you if you have one.</li>
        <li>Dress properly.</li>
        <li>Documents or electronic devices are not allowed to be brought into the exam room, EXCEPT calculator and a blue pen.</li>
      </ul>
      
      <p style="margin-bottom: 15px;">With this information, you have to confirm your attendance no later than <strong>${confirmationDeadline}</strong> by replying to this email.</p>
      
      <p style="margin-bottom: 10px;">For more details about exam regulations, please see the attached file of exam regulations and instructions.</p>
      <p style="margin-bottom: 10px;"><strong>Location:</strong> <a href="https://maps.app.goo.gl/bhrx6qwA6rQqHiFc7" style="color: #1e3a8a;">click here</a></p>
      <p style="margin-bottom: 15px;">If you have any questions, please contact us via mail or phone number: <strong>${contactPhone}</strong>.</p>
      
      <p style="margin-bottom: 5px;"><strong>Best regards,</strong></p>
      <p style="margin-bottom: 0;"><strong>${officeDepartment}</strong></p>
    </div>
  `;

  document.getElementById('emailEditor').innerHTML = content;
}

function generateAdmissionBeforeGrade12Email() {
  const contactPhone = document.getElementById('contactPhone').value;
  const confirmationDeadline = document.getElementById('confirmationDeadline').value;
  const officeDepartment = document.getElementById('officeDepartment').value;
  const academicYear = document.getElementById('academicYear').value;

  const content = `
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">
      <p style="margin-bottom: 15px;"><strong>Sample of admission offer (before national grade 12 exam)</strong></p>
      
      <p style="margin-bottom: 15px;">[Date]</p>
      
      <p style="margin-bottom: 15px;"><strong>Dear <span class="variable-placeholder">{{applicantName}}</span>,</strong></p>
      <p style="margin-bottom: 10px;"><strong>Subject: Partial Women in STEM Scholarship!</strong></p>
      <p style="margin-bottom: 15px;"><strong>Major:</strong> <span class="variable-placeholder">{{major}}</span></p>
      
      <p style="margin-bottom: 15px;">After careful consideration by our committee, we are pleased to inform you that you have been selected for the academic year ${academicYear} at Cambodia University of Technology and Science (CamTech). This scholarship covers <strong>75% of the tuition fee</strong> which is equivalent to <strong>USD 12,000</strong> for the four-year Bachelor's Degree program.</p>
      
      <p style="margin-bottom: 15px;">However, if the applicant achieves <strong>grade A overall</strong> for the national grade 12 exam, the applicant will be awarded a <strong>100% scholarship</strong> at CamTech. This scholarship covers <strong>100% of the tuition fee</strong> which is equivalent to <strong>USD 16,000</strong> for the four-year Bachelor's Degree program.</p>
      
      <p style="margin-bottom: 15px;">You have to confirm your acceptance no later than <strong>${confirmationDeadline}</strong> by <strong>REPLYING TO THIS EMAIL</strong>.</p>
      
      <p style="margin-bottom: 15px;">For more information, please contact us at <strong>${contactPhone}</strong>.</p>
      
      <p style="margin-bottom: 15px;">We look forward to seeing you as a <strong>Women in STEM Scholarship recipient</strong>.</p>
      
      <p style="margin-bottom: 5px;"><strong>Best regards,</strong></p>
      <p style="margin-bottom: 0;"><strong>${officeDepartment}</strong></p>
    </div>
  `;

  document.getElementById('emailEditor').innerHTML = content;
}

function generateAdmissionNoScholarshipEmail() {
  const contactPhone = document.getElementById('contactPhone').value;
  const officeDepartment = document.getElementById('officeDepartment').value;
  const academicYear = document.getElementById('academicYear').value;
  const documentDeadline = document.getElementById('documentDeadline').value;
  const intakeStartDate = document.getElementById('intakeStartDate').value;

  const content = `
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">
      <p style="margin-bottom: 15px;"><strong>Sample of admission offer (Don't apply for scholarship)</strong></p>
      <p style="margin-bottom: 15px;"><strong>Cambodia University of Technology and Science (CamTech)</strong></p>
      <p style="margin-bottom: 15px;"><strong>${officeDepartment}</strong></p>
      
      <p style="margin-bottom: 15px;">[Date]</p>
      
      <p style="margin-bottom: 15px;"><strong>Dear <span class="variable-placeholder">{{applicantName}}</span>,</strong></p>
      <p style="margin-bottom: 10px;"><strong>Subject: Congratulations on being admitted to the program</strong></p>
      <p style="margin-bottom: 15px;"><strong>Applied:</strong> <span class="variable-placeholder">{{major}}</span></p>
      
      <p style="margin-bottom: 15px;">After careful consideration by our committee, we are pleased to inform you that you have been <strong>admitted</strong> for the academic year ${academicYear} at Cambodia University of Technology and Science (CamTech).</p>
      
      <p style="margin-bottom: 10px;">To complete the admission procedure, we request that you:</p>
      <p style="margin-left: 20px; margin-bottom: 5px;">1) Fill out the admission form (hard copy) on campus</p>
      <p style="margin-left: 20px; margin-bottom: 5px;">2) Submit an official copy of grade 12 certificate</p>
      <p style="margin-left: 20px; margin-bottom: 5px;">3) Submit an official copy of national ID card, birth certificate or passport (1 of these)</p>
      <p style="margin-left: 20px; margin-bottom: 15px;">4) Submit photos of 4x6= 4, 3x4= 4 (formal dress with white background)</p>
      
      <p style="margin-bottom: 10px;"><strong>Important Notes:</strong></p>
      <ul style="margin-bottom: 15px; padding-left: 20px;">
        <li><strong>Business Hours:</strong> Monday to Friday (8:00 a.m.–5:00 p.m.), Saturday (8:00 a.m.–12:00 p.m.).</li>
        <li><strong>Student Dormitory:</strong> If you are interested in staying in the dormitory, please complete the application form provided in the <strong>link</strong></li>
      </ul>
      
      <p style="margin-bottom: 15px;">Please ensure all documents and payment are submitted <strong>no longer than ${documentDeadline}</strong>.</p>
      <p style="margin-bottom: 15px;">A new intake will start <strong>${intakeStartDate}</strong>.</p>
      <p style="margin-bottom: 15px;">For more information, please contact us at: <strong>${contactPhone}</strong>.</p>
      <p style="margin-bottom: 15px;">We are looking forward to seeing you.</p>
      
      <p style="margin-bottom: 5px;"><strong>Best regards,</strong></p>
      <p style="margin-bottom: 5px;"><strong>${officeDepartment}</strong></p>
      <p style="margin-bottom: 0;"><strong>Cambodia University of Technology and Science (CamTech)</strong></p>
    </div>
  `;

  document.getElementById('emailEditor').innerHTML = content;
}

function generateAdmissionAfterGrade12Email() {
  const contactPhone = document.getElementById('contactPhone').value;
  const confirmationDeadline = document.getElementById('confirmationDeadline').value;
  const officeDepartment = document.getElementById('officeDepartment').value;
  const academicYear = document.getElementById('academicYear').value;

  const content = `
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">
      <p style="margin-bottom: 15px;"><strong>Sample of admission offer (after national grade 12 exam)</strong></p>
      <p style="margin-bottom: 15px;"><strong>Cambodia University of Technology and Science (CamTech)</strong></p>
      <p style="margin-bottom: 15px;"><strong>${officeDepartment}</strong></p>
      
      <p style="margin-bottom: 15px;">[Date]</p>
      
      <p style="margin-bottom: 15px;"><strong>Dear <span class="variable-placeholder">{{applicantName}}</span>,</strong></p>
      
      <p style="margin-bottom: 15px;"><strong>Subject: Full Scholarship Award for the Academic Year ${academicYear}</strong></p>
      <p style="margin-bottom: 15px;"><strong>Major:</strong> <span class="variable-placeholder">{{major}}</span></p>
      
      <p style="margin-bottom: 15px;"><strong>Congratulations!</strong> After a thorough review by our scholarship committee, we are pleased to inform you that you have been selected to receive a <strong>Full Scholarship</strong> at Cambodia University of Technology and Science (CamTech) for the academic year ${academicYear}. This scholarship covers <strong>100% of your tuition fees</strong>, totaling <strong>USD 16,000</strong>, for your four-year Bachelor's Degree program.</p>
      
      <p style="margin-bottom: 10px;">This scholarship is awarded with the following conditions:</p>
      <p style="margin-left: 20px; margin-bottom: 5px;">1. <strong>Academic Conduct:</strong> you are required to adhere to all university rules, policies, and codes of conduct.</p>
      <p style="margin-left: 20px; margin-bottom: 5px;">2. <strong>Academic Performance:</strong> you must maintain a minimum cumulative GPA of 3.0 throughout your studies at CamTech to remain eligible for this scholarship. Additionally, you are expected to participate in university events and represent the scholarship program.</p>
      <p style="margin-left: 20px; margin-bottom: 15px;">3. <strong>Program Availability:</strong> please note that the university reserves the right to close or adjust academic programs as needed.</p>
      
      <p style="margin-bottom: 15px;">To confirm your acceptance of this scholarship, please reply to this email by <strong>${confirmationDeadline}</strong>.</p>
      
      <p style="margin-bottom: 15px;">If you have any questions or need further information, please do not hesitate to contact us at <strong>${contactPhone}</strong>.</p>
      
      <p style="margin-bottom: 15px;">Once again, congratulations on your achievement. We look forward to welcoming you as a valued scholarship recipient at CamTech.</p>
      
      <p style="margin-bottom: 5px;"><strong>Best regards,</strong></p>
      <p style="margin-bottom: 5px;"><strong>${officeDepartment}</strong></p>
      <p style="margin-bottom: 0;"><strong>Cambodia University of Technology and Science (CamTech)</strong></p>
    </div>
  `;

  document.getElementById('emailEditor').innerHTML = content;
}

function insertVariable() {
  const variables = [
    { value: '{{applicantName}}', label: 'Applicant Name' },
    { value: '{{major}}', label: 'Major/Program' },
    { value: '{{scholarshipStatus}}', label: 'Scholarship Status' },
    { value: '{{studentId}}', label: 'Student ID' }
  ];
  
  let variableList = 'Choose a variable to insert:\n\n';
  variables.forEach((variable, index) => {
    variableList += `${index + 1}. ${variable.label} (${variable.value})\n`;
  });
  
  const choice = prompt(variableList + '\nEnter the number (1-4):');
  const selectedIndex = parseInt(choice) - 1;
  
  if (selectedIndex >= 0 && selectedIndex < variables.length) {
    const selectedVariable = variables[selectedIndex];
    const span = `<span class="variable-placeholder">${selectedVariable.value}</span>`;
    document.execCommand('insertHTML', false, span);
  }
}

// Enhanced formatting functions
function formatText(command, value = null) {
  if (command === 'foreColor') {
    const colors = ['#000000', '#1e3a8a', '#dc2626', '#16a34a', '#ca8a04'];
    const colorNames = ['Black', 'Blue', 'Red', 'Green', 'Orange'];
    
    let colorList = 'Choose a color:\n\n';
    colors.forEach((color, index) => {
      colorList += `${index + 1}. ${colorNames[index]}\n`;
    });
    
    const choice = prompt(colorList + '\nEnter the number (1-5):');
    const selectedIndex = parseInt(choice) - 1;
    
    if (selectedIndex >= 0 && selectedIndex < colors.length) {
      document.execCommand(command, false, colors[selectedIndex]);
    }
  } else if (command === 'createLink') {
    const url = prompt('Enter URL:');
    if (url) {
      document.execCommand(command, false, url);
    }
  } else {
    document.execCommand(command, false, value);
  }
}

function showFontMenu() {
  const fonts = ['Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Verdana', 'Courier New'];
  let fontList = 'Choose a font:\n\n';
  fonts.forEach((font, index) => {
    fontList += `${index + 1}. ${font}\n`;
  });
  
  const choice = prompt(fontList + '\nEnter the number (1-6):');
  const selectedIndex = parseInt(choice) - 1;
  
  if (selectedIndex >= 0 && selectedIndex < fonts.length) {
    document.execCommand('fontName', false, fonts[selectedIndex]);
  }
}

function showSizeMenu() {
  const sizes = ['10px', '12px', '14px', '16px', '18px', '20px', '24px'];
  const sizeLabels = ['Small', 'Normal', 'Medium', 'Large', 'X-Large', 'XX-Large', 'Huge'];
  
  let sizeList = 'Choose a font size:\n\n';
  sizes.forEach((size, index) => {
    sizeList += `${index + 1}. ${sizeLabels[index]} (${size})\n`;
  });
  
  const choice = prompt(sizeList + '\nEnter the number (1-7):');
  const selectedIndex = parseInt(choice) - 1;
  
  if (selectedIndex >= 0 && selectedIndex < sizes.length) {
    document.execCommand('fontSize', false, selectedIndex + 1);
  }
}

function insertImage() {
  const imageUrl = prompt('Enter image URL:');
  if (imageUrl) {
    const img = `<img src="${imageUrl}" style="max-width: 100%; height: auto;" alt="Inserted image">`;
    document.execCommand('insertHTML', false, img);
  }
}

function showMoreOptions() {
  alert('More formatting options:\n\n• Subscript: Ctrl+,\n• Superscript: Ctrl+.\n• Clear formatting: Ctrl+\\\n• Undo: Ctrl+Z\n• Redo: Ctrl+Y');
}

function insertTable() {
  const rows = prompt('Enter number of rows (1-10):');
  const cols = prompt('Enter number of columns (1-10):');
  
  const numRows = parseInt(rows);
  const numCols = parseInt(cols);
  
  if (numRows >= 1 && numRows <= 10 && numCols >= 1 && numCols <= 10) {
    let tableHTML = '<table style="width: 100%; border-collapse: collapse; margin: 16px 0; border: 1px solid #000;">';
    
    // Create table rows
    for (let i = 0; i < numRows; i++) {
      tableHTML += '<tr>';
      for (let j = 0; j < numCols; j++) {
        if (i === 0) {
          // Header row
          tableHTML += `<th style="padding: 12px; border: 1px solid #000; background: #f0f0f0; color: black; font-weight: 600;">Header ${j + 1}</th>`;
        } else {
          // Data rows
          tableHTML += `<td style="padding: 12px; border: 1px solid #000;">Cell ${i + 1}-${j + 1}</td>`;
        }
      }
      tableHTML += '</tr>';
    }
    
    tableHTML += '</table>';
    document.execCommand('insertHTML', false, tableHTML);
  } else {
    alert('Please enter valid numbers between 1-10 for rows and columns.');
  }
}

// Clear all admin input fields
function clearAdminInputs() {
  if (confirm('Are you sure you want to clear all admin input fields?')) {
    document.getElementById('examDate').value = '';
    document.getElementById('confirmationDeadline').value = '';
    document.getElementById('contactPhone').value = '';
    document.getElementById('universityLocation').value = '';
    document.getElementById('examVenueMath').value = '';
    document.getElementById('examVenueEnglish').value = '';
    document.getElementById('interviewVenue').value = '';
    document.getElementById('mathSchedule').value = '';
    document.getElementById('englishSchedule').value = '';
    document.getElementById('interviewSchedule').value = '';
    document.getElementById('officeDepartment').value = '';
    document.getElementById('academicYear').value = '';
    document.getElementById('documentDeadline').value = '';
    document.getElementById('intakeStartDate').value = '';
    
    // Regenerate email with cleared inputs
    generateEmail();
  }
}

// Initialize the email template
document.addEventListener('DOMContentLoaded', function() {
  generateEmail();
});

window.onload = function() {
  generateEmail();
};

// Send email function
function sendEmail() {
  const emailType = document.getElementById('emailType').value;
  const emailContent = document.getElementById('emailEditor').innerHTML;
  
  // Get email type display name
  const emailTypeNames = {
    'entrance-exam': 'Entrance Exam Schedule',
    'admission-before-grade12': 'Admission Offer (Before Grade 12)',
    'admission-no-scholarship': 'Admission Offer (No Scholarship)',
    'admission-after-grade12': 'Admission Offer (After Grade 12)'
  };
  
  const emailTypeName = emailTypeNames[emailType] || 'Email Template';
  
  // Show confirmation dialog
  const confirmation = confirm(`Are you sure you want to send this "${emailTypeName}" email?\n\nThis will send the email to the selected applicants.`);
  
  if (confirmation) {
    // Here you would integrate with your email sending service
    // For now, we'll show a success message
    alert(`✅ Email sent successfully!\n\nEmail Type: ${emailTypeName}\nStatus: Sent to applicants\nTime: ${new Date().toLocaleString()}`);
    
    // You can add actual email sending logic here, such as:
    // - API call to your backend
    // - Integration with email service (SendGrid, Mailgun, etc.)
    // - Save to database for batch processing
    
    console.log('Email sent:', {
      type: emailType,
      typeName: emailTypeName,
      content: emailContent,
      timestamp: new Date().toISOString()
    });
  }
}
