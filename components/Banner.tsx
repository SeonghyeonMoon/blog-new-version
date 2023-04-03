import MoonAnimation from './MoonAnimation';
import { FaGithub, FaPaperPlane } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className='mx-auto flex max-w-3xl items-center justify-between'>
      <div>
        <h2 className='text-2xl'>
          안녕하세요.
          <br />
          프론트엔드 개발자 문성현입니다.
        </h2>
        <p>학습한 내용과 느낀 점을 기록하고 공유하는 공간입니다.</p>
        <div className='mt-2 flex gap-2'>
          <a href='https://github.com/SunghyeonMoon'>
            <FaGithub className='text-2xl transition-opacity hover:opacity-80' />
          </a>
          <a href='mailto:shine7329@gmail.com'>
            <FaPaperPlane className='text-2xl transition-opacity hover:opacity-80' />
          </a>
        </div>
      </div>
      <MoonAnimation />
    </section>
  );
};

export default Banner;
