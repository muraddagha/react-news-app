const Loading = ({ children, isPending, loadingSkelton }) => {
  return !isPending ? children : loadingSkelton;
};

export default Loading;
