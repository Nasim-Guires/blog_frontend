function Textarea(props) {
  return (
    <textarea
      {...props}
      rows={6}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default Textarea;
