const textToType = `Hello again !
welcome to the next step of solving this idea of mine to have me do more work, SILLY ME.
if I helped you, you've disappointed me.
and if i haven't, then congrats. YOU are better than the pendejos that I gave the answer to.
well in this stage I ain't helping no one with shit cuz I'd be rewatching that "Oussema Bouguerra" semi-volley against al-ittihad
So ... go to the link below and try to find the code in the video then enter it in that box over there
Well ! What are you waiting for ... clock is ticking so hurry up.`;

const typingTextElement = document.getElementById('typing-text');

let i = 0;

function typeText() {
  if (i < textToType.length) {
    typingTextElement.innerHTML += textToType.charAt(i);
    i++;
    setTimeout(typeText, 100); // Typing speed (adjust as needed)
  }
}

typeText();
