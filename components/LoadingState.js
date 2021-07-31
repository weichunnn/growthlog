import Lottie from 'react-lottie';
import animationData from '../public/static/loading.json';

export default function LoadingState() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={350} width={350} />;
}
