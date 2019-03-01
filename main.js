
const wrapper = document.getElementById('wrapper'),
      roller = document.getElementById('roller'), size = 5,
      index = document.getElementById('index'),
      width = parseInt(getComputedStyle(wrapper).getPropertyValue('--wrapper-width'));

let current = 0, play = true;

const move_to = async (target) => {
    let circles = index.children;
    for (let i=0; i<size; ++i) {
        let classList = circles[i].classList;
        if (i === target) classList.add('selected');
        else classList.remove('selected');
    }
    roller.style.transform = `translateX(${-target*width}px)`;
    current = target;
};     

move_to(0);
let handler = setInterval(() => {
    if (play) move_to((current+size+1) % size);
} , 2000);

wrapper.onmouseenter = () => play = false;
wrapper.onmouseleave = () => play = true;

for (let i=0, circles = index.children; i<size; ++i) {
    circles[i].onmouseenter = () => move_to(i);
}