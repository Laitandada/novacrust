import React from 'react'
import { Search } from 'lucide-react';
import { Input } from '../ui/input';

type Props = {}

function SearchBox({}: Props) {
  return (
    <div className="relative w-full max-w-xl hidden md:block">
   <Search  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#95989E] w-[20px] h-[20px]" />
 <Input
   type="text"
   placeholder="Search"
   className="w-full pl-10 bg-white text-input_text rounded-md border-none"
 />

</div>
  )
}

export default SearchBox