# MaatriRaksha

An academic concept prototype for an early-warning and maternal referral workflow. It uses only HTML, CSS, and vanilla JavaScript; demonstration records are stored in the current browser's `localStorage`.

## Run locally

1. Open `index.html` directly in a modern browser, or serve this folder with any local static-file server.
2. No package installation, build step, backend, or database is required.
3. Use only fictional case references. Do not enter real patient or personal information.

## Two-minute demonstration guide

1. **Dashboard (15 seconds):** Point out the prototype/offline indicator, sample-only activity, and clinical-judgement notice.
2. **Start a check (40 seconds):** Enter a fictional case reference, then answer the five warning-sign prompts. Try “Not sure” or “Yes” to show that uncertainty is not treated as a negative answer and that a reported listed sign leads to urgent guidance.
3. **Review and result (25 seconds):** Review answers, show the result wording and the reminder that a green result does not confirm safety.
4. **Prepare a referral (25 seconds):** Find a clearly fictional facility and prepare a referral. Explain that it is saved locally and is not sent to a hospital.
5. **Tracking and limitations (15 seconds):** Change a demonstration status, then show saved records and the privacy/offline information in Settings.

## Important limitations

This is not clinically validated and is not for real medical use. The warning-sign logic is illustrative and does not diagnose. Any real deployment must use clinician-approved assessment and referral rules, verified facility information, a secure backend, and verified connectivity. `localStorage` is only suitable for this prototype and is not a secure medical-record system. The sample facility names, locations, and contact details are fictional.
