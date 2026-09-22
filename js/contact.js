(function () {
    'use strict';
    var recipient = 'contact@resolutionos.org';
    document.querySelectorAll('form[data-contact-status="email"]').forEach(function (form) {
        form.querySelector('[name="name"]').maxLength = 120;
        form.querySelector('[name="company"]').maxLength = 160;
        form.querySelector('[name="message"]').maxLength = 2000;
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
            var draft = form.querySelector('.email-draft');
            if (!draft) {
                draft = document.createElement('div');
                draft.className = 'email-draft';
                form.appendChild(draft);
            }
            draft.replaceChildren();
            var preview = document.createElement('p');
            preview.textContent = body;
            var open = document.createElement('a');
            open.href = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            open.textContent = 'Open email app';
            var copy = document.createElement('button');
            copy.type = 'button';
            copy.textContent = 'Copy message';
            copy.addEventListener('click', function () {
                if (!navigator.clipboard || !navigator.clipboard.writeText) {
                    form.querySelector('.form-result').textContent = 'Select and copy the draft below, then email it to ' + recipient + '.';
                    return;
                }
                navigator.clipboard.writeText('To: ' + recipient + '\nSubject: ' + subject + '\n\n' + body).then(function () {
                    form.querySelector('.form-result').textContent = 'Message copied. Paste it into your email app and send it to ' + recipient + '.';
                }).catch(function () {
                    form.querySelector('.form-result').textContent = 'Copy was unavailable. Select and copy the draft below, then email it to ' + recipient + '.';
                });
            });
            draft.append(preview, open, copy);
            form.querySelector('.form-result').textContent = 'Your draft is ready. Open your email app to review and send it. Nothing has been sent yet.';
            open.focus();
        });
    });
}());
