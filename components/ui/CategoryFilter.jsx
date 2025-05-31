'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

const categories = [
  { label: 'All Categories', value: '' },
  { label: 'Workshop', value: 'workshop' },
  { label: 'Seminar', value: 'seminar' },
  { label: 'Conference', value: 'conference' },

];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (selectedCategory) {
      params.set('category', selectedCategory);
    } else {
      params.delete('category');
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  return (
    <select
      className="category-dropdown"
      onChange={handleChange}
      defaultValue={searchParams.get('category') || ''}
    >
      {categories.map(({ label, value }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </select>
  );
}
