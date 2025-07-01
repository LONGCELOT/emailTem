function formatText(command) {
  document.execCommand(command, false, null);
}

function generateEmail() {
  const examDate = document.getElementById('examDate').value;
  const confirmDate = document.getElementById('confirmDate').value;
  const contactPhone = document.getElementById('contactPhone').value;
  const locationLink = document.getElementById('locationLink').value;
  const formLink = document.getElementById('formLink').value;

  const content = `
    <p>Dear <span class="variable-placeholder">{{applicantName}}</span>,</p>
    
    <p>We are pleased to inform you that you have been offered admission to the <strong><span class="variable-placeholder">{{major}}</span></strong> program for the academic year 2025-2026.</p>
    
    <p>You have been awarded a scholarship of <strong><span class="variable-placeholder">{{scholarshipPercentage}}</span>%</strong>.</p>
    
    <p>To complete your admission process, please <em>take note</em> of the following:</p>
    
    <ul>
      <li><strong>Entrance Exam:</strong> ${examDate}</li>
      <li><strong>Confirmation Deadline:</strong> ${confirmDate}</li>
      <li><strong>Document submission deadline:</strong> July 1, 2025</li>
    </ul>
    
    <p><strong>School Location:</strong> <a href="${locationLink}" style="color: #1e3a8a;">Click here to view on map</a></p>
    
    <p><strong>Fill Out Form:</strong> <a href="${formLink}" style="color: #1e3a8a;">Complete Form</a></p>
    
    <table class="step-table">
      <tr>
        <th>Step</th>
        <th>Action</th>
      </tr>
      <tr>
        <td><strong>1</strong></td>
        <td>Confirm your admission by replying via Telegram or portal</td>
      </tr>
      <tr>
        <td><strong>2</strong></td>
        <td>Prepare and submit all required documents before the deadline</td>
      </tr>
      <tr>
        <td><strong>3</strong></td>
        <td>Attend the entrance exam on the scheduled date</td>
      </tr>
    </table>

    <p>If you have any questions, contact us at <strong>${contactPhone}</strong>.</p>
    
    <p><strong>Best regards,</strong><br>
    <strong>Admission Office</strong><br>
    <strong>CamTech University</strong></p>
  `;

  document.getElementById('emailEditor').innerHTML = content;
}

function insertVariable() {
  const variables = [
    { value: '{{applicantName}}', label: 'Applicant Name' },
    { value: '{{emailSubject}}', label: 'Email Subject' },
    { value: '{{major}}', label: 'Major/Program' },
    { value: '{{scholarshipPercentage}}', label: 'Scholarship %' }
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

// Initialize the email template
document.addEventListener('DOMContentLoaded', function() {
  generateEmail();
});

window.onload = function() {
  generateEmail();
};
