import { vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { TaskCard } from '../components/TaskCard';

test('shows task title', () => {
  const task = {
    id: 1,
    title: 'Learn JSX',
    completed: false,
  };

  render(
    <MemoryRouter>
      <TaskCard task={task} onToggle={() => {}} onDelete={() => {}} />
    </MemoryRouter>,
  );

  expect(screen.getByText('Learn JSX')).toBeInTheDocument();
});

test('calls onToggle when toggle button is clicked', () => {
  const task = {
    id: 1,
    title: 'Learn JSX',
    completed: false,
  };

  const onToggle = vi.fn();

  render(
    <MemoryRouter>
      <TaskCard task={task} onToggle={onToggle} onDelete={() => {}} />
    </MemoryRouter>,
  );

  fireEvent.click(screen.getByRole('button', { name: 'Toggle completion' }));

  expect(onToggle).toHaveBeenCalledWith(1);
});
