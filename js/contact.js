(function () {
    'use strict';
    document.querySelectorAll('form[data-contact-status="email"]').forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (!form.reportValidity()) return;
            var data = new FormData(form);
            var company = String(data.get('company') || '').trim();
            var subject = 'ResolutionOS demo request' + (company ? ' — ' + company : '');
            var body = 'Name: ' + String(data.get('name')).trim() + '\n'
                + 'Work email: ' + String(data.get('email')).trim() + '\n'
                + 'Company: ' + (company || 'Not provided') + '\n\n'
                + 'Customer-service workflow:\n' + String(data.get('message')).trim();
            window.location.href = 'mailto:contact@resolutionos.org?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            form.querySelector('.form-result').textContent = 'Review and send the draft in your email app. If it does not open, email contact@resolutionos.org directly.';
        });
    });
}());
