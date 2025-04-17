import React from 'react'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold text-dark">Olá, Técnico 👋</h2>
        <p className="text-secondary mt-1">Bem-vindo ao BioStock</p>
      </section>

      <section className="bg-primary text-dark p-6 rounded-2xl shadow">
        <h3 className="text-md font-semibold mb-2">Estoque atual</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Reagente A</p>
            <p className="font-bold text-lg">12 unidades</p>
          </div>
          <div>
            <p className="text-sm">Reagente B</p>
            <p className="font-bold text-lg">4 unidades ⚠️</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
