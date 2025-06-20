import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import LayoutWrapper from '../components/LayoutWrapper';
import SidebarMenu from '../components/SidebarMenu';

const MyInformation = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [userInfo, setUserInfo] = useState({
    nome: "Nailton Vieira",
    cpf: "123485912-01",
    email: "nailtonvieira@ig.com",
    celular: "(85) 5555-5555",
  });

  const [deliveryInfo, setDeliveryInfo] = useState({
    endereco: "Rua Monsenhor dantas, 0324",
    bairro: "Jacarecanga",
    cidade: "Fortaleza, Ceará",
    cep: "433-8800",
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };
  
  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const handleSave = () => {
    console.log("Dados salvos:", { userInfo, deliveryInfo });
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setIsEditing(false);
  };

  const inputClasses = "font-semibold text-gray-800 bg-gray-50 border border-gray-300 rounded px-2 py-1 w-full";
  const labelClasses = "font-medium text-gray-500 w-24 inline-block";
  const valueClasses = "font-semibold text-gray-800";

  return (
    <LayoutWrapper>
      <main className="container mx-auto px-4 py-8 pt-52 pb-35">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <SidebarMenu />

          <div className="w-full bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h2 className="font-bold text-lg text-gray-800">Minhas Informações</h2>
              
              {!isEditing && (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="text-sm font-semibold text-pink-600 hover:underline"
                >
                  Editar
                </button>
              )}
            </div>

            <div className="pt-6 pb-4 border-b border-gray-200 text-left">
              <h3 className="font-semibold text-gray-700 mb-4">Informações Pessoais</h3>
              <div className="space-y-3 text-sm">
                {isEditing ? (
                  <>
                    <p><label htmlFor="nome" className={labelClasses}>Nome:</label> <input type="text" id="nome" name="nome" value={userInfo.nome} onChange={handleUserChange} className={inputClasses} /></p>
                    <p><label htmlFor="cpf" className={labelClasses}>CPF:</label> <input type="text" id="cpf" name="cpf" value={userInfo.cpf} onChange={handleUserChange} className={inputClasses} /></p>
                    <p><label htmlFor="email" className={labelClasses}>Email:</label> <input type="email" id="email" name="email" value={userInfo.email} onChange={handleUserChange} className={inputClasses} /></p>
                    <p><label htmlFor="celular" className={labelClasses}>Celular:</label> <input type="tel" id="celular" name="celular" value={userInfo.celular} onChange={handleUserChange} className={inputClasses} /></p>
                  </>
                ) : (
                  <>
                    <p><span className={labelClasses}>Nome:</span> <span className={valueClasses}>{userInfo.nome}</span></p>
                    <p><span className={labelClasses}>CPF:</span> <span className={valueClasses}>{userInfo.cpf}</span></p>
                    <p><span className={labelClasses}>Email:</span> <span className={valueClasses}>{userInfo.email}</span></p>
                    <p><span className={labelClasses}>Celular:</span> <span className={valueClasses}>{userInfo.celular}</span></p>
                  </>
                )}
              </div>
            </div>

            <div className="pt-6 text-left">
              <h3 className="font-semibold text-gray-700 mb-4">Informações de Entrega</h3>
              <div className="space-y-3 text-sm">
                {isEditing ? (
                  <>
                    <p><label htmlFor="endereco" className={labelClasses}>Endereço:</label> <input type="text" id="endereco" name="endereco" value={deliveryInfo.endereco} onChange={handleDeliveryChange} className={inputClasses} /></p>
                    <p><label htmlFor="bairro" className={labelClasses}>Bairro:</label> <input type="text" id="bairro" name="bairro" value={deliveryInfo.bairro} onChange={handleDeliveryChange} className={inputClasses} /></p>
                    <p><label htmlFor="cidade" className={labelClasses}>Cidade:</label> <input type="text" id="cidade" name="cidade" value={deliveryInfo.cidade} onChange={handleDeliveryChange} className={inputClasses} /></p>
                    <p><label htmlFor="cep" className={labelClasses}>CEP:</label> <input type="text" id="cep" name="cep" value={deliveryInfo.cep} onChange={handleDeliveryChange} className={inputClasses} /></p>
                  </>
                ) : (
                  <>
                    <p><span className={labelClasses}>Endereço:</span> <span className={valueClasses}>{deliveryInfo.endereco}</span></p>
                    <p><span className={labelClasses}>Bairro:</span> <span className={valueClasses}>{deliveryInfo.bairro}</span></p>
                    <p><span className={labelClasses}>Cidade:</span> <span className={valueClasses}>{deliveryInfo.cidade}</span></p>
                    <p><span className={labelClasses}>CEP:</span> <span className={valueClasses}>{deliveryInfo.cep}</span></p>
                  </>
                )}
              </div>
            </div>
            
            {isEditing && (
              <div className="mt-6 flex justify-end gap-4">
                <button onClick={handleCancel} className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300">
                  Cancelar
                </button>
                <button onClick={handleSave} className="px-4 py-2 text-sm font-semibold text-white bg-pink-600 rounded-md hover:bg-pink-700">
                  Salvar
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </LayoutWrapper>
  );
};

export default MyInformation;