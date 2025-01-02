document.getElementById('contactbtn').addEventListener('click', () => {
    document.getElementById('open').classList.remove('hidden');
}
);

document.getElementById('close').addEventListener('click',() => {
    document.getElementById('open').classList.add('hidden');
});