"use client";

import { useState, useEffect, useCallback } from 'react';

const DATA_KEY = 'finShenzData';

export type UserData = {
  points: number;
  completedScenarios: string[]; // array of scenario slugs
  checkedItems: Record<string, string[]>; // { [scenarioSlug]: [itemId, ...] }
};

const defaultUserData: UserData = {
  points: 0,
  completedScenarios: [],
  checkedItems: {},
};

export function useUserData() {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(DATA_KEY);
      if (item) {
        setUserData(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key “${DATA_KEY}”:`, error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        window.localStorage.setItem(DATA_KEY, JSON.stringify(userData));
      } catch (error) {
        console.warn(`Error setting localStorage key “${DATA_KEY}”:`, error);
      }
    }
  }, [userData, isLoaded]);
  
  const setCheckedState = useCallback((scenarioSlug: string, itemId: string, isChecked: boolean) => {
    setUserData(prevData => {
      const currentChecked = prevData.checkedItems[scenarioSlug] || [];
      const newChecked = isChecked 
        ? [...new Set([...currentChecked, itemId])]
        : currentChecked.filter(id => id !== itemId);
        
      return {
        ...prevData,
        checkedItems: {
          ...prevData.checkedItems,
          [scenarioSlug]: newChecked,
        }
      };
    });
  }, []);

  const completeScenario = useCallback((scenarioSlug: string) => {
    setUserData(prevData => {
      if (prevData.completedScenarios.includes(scenarioSlug)) {
        return prevData;
      }
      return {
        ...prevData,
        points: prevData.points + 100,
        completedScenarios: [...prevData.completedScenarios, scenarioSlug],
      };
    });
  }, []);

  return { userData, setCheckedState, completeScenario, isLoaded };
}
