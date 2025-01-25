// src/redux/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

// `useAppDispatch` returns the typed `dispatch` function
export const useAppDispatch = () => useDispatch<AppDispatch>();

// `useAppSelector` is a typed version of `useSelector` to get the state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
