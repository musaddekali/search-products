'use client';

type SearchBarProps = {
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string) => void;
};

const SearchBar = ({
  placeholder = 'Search...',
  value,
  onChange,
}: SearchBarProps) => {
  return (
    <div className="flex justify-center items-center sticky top-4">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none shadow-lg"
        type="search"
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
