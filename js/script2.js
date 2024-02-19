// 로티파일경로
const animationPath = './src/animation2.json';

// 애니메이션 div id 
const ani = document.getElementById('lottie-animation');

// 로티파일 설정 옵션 
const aniOp = {
    container : ani, // 렌더링요소
    randerer: 'svg', // 렌더링 방식
    loop : true, // 반복 
    autoplay:true, // 자동재생 
    path:animationPath // 로티파일 경로 지정
};
// 로티파일 로드 및 애니메이션 표시 
const anim = lottie.loadAnimation(aniOp);
// .loadAnimation() 함수는,
// 로티 제이슨 파일을 로드하고 
// 애니메이션 렌더링시 사용하는 함수

// 크기조절
ani.style.width = '50%'; // 가로
ani.style.height = '50%'; // 세로