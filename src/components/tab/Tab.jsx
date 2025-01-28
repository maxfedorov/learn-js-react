const Tab = ({ title, isActive, onClick }) => {
  return (
    <button onClick={onClick} disabled={isActive}>
      {title}
    </button>
  );
};

export default Tab;
