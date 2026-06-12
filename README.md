# अभिषेक संग कंचन — पुष्प विवाह निमंत्रण

Next.js, Tailwind CSS, shadcn/ui-style components और Motion से बना responsive
हिंदी floral wedding invitation landing page. इसमें supplied `Varaha Roopam`
audio के 5वें से 18वें सेकंड का exact 13-second trimmed native loop और संगीत
चालू/बंद control शामिल है।

Browser autoplay rules के कारण शहनाई पहली touch/click पर शुरू होती है। ऊपर दिया
संगीत control इसे कभी भी बंद या फिर से चालू कर सकता है।

इसमें 03 जुलाई 2026, सायं 7:00 बजे तक invitation के भीतर compact live
countdown शामिल है। सभी तारीख, समय, पता और countdown अंक English numerals में
रखे गए हैं।

## Local development

```bash
npm install
npm run dev
```

फिर `http://localhost:3000` खोलें।

## GitHub Pages पर मुफ्त deployment

1. इस folder को नई GitHub repository में push करें।
2. Repository में **Settings → Pages → Build and deployment → Source** को
   **GitHub Actions** चुनें।
3. `main` branch पर हर push के बाद included workflow site को build और deploy
   कर देगा।

Project repository और `username.github.io` repository, दोनों के लिए base path
अपने-आप configure होता है।

## Main files

- `app/page.tsx` — invitation content और Motion animations
- `app/globals.css` — responsive card styling
- `public/wedding-card-floral.jpeg` — supplied floral invitation artwork
- `components/shehnai-player.tsx` — trimmed audio loop player
- `public/varaha-loop.mp3` — supplied audio का 5–18 second clip
- `components/wedding-countdown.tsx` — live wedding countdown
- `.github/workflows/deploy.yml` — GitHub Pages deployment
