const NotFound = ({ title = 'Empty' }: { title?: string }) => {
  return (
    <div className="w-full h-20 bg-gray-200 p-6 mt-6">
      <h3 className="text-2xl font-semibold text-gray-600 text-center">
        {title}
      </h3>
    </div>
  );
};

export default NotFound;
