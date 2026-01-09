"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type SelectedService = {
  id: number
  title: string
  category: string
} | null

type ServiceContextType = {
  service: SelectedService
  setService: (service: SelectedService) => void
}

const ServiceContext = createContext<ServiceContextType | null>(null)

export function ServiceProvider({ children }: { children: ReactNode }) {
  const [service, setService] = useState<SelectedService>(null)

  return (
    <ServiceContext.Provider value={{ service, setService }}>
      {children}
    </ServiceContext.Provider>
  )
}

export function useService() {
  const ctx = useContext(ServiceContext)
  if (!ctx) throw new Error("useService must be used inside ServiceProvider")
  return ctx
}
