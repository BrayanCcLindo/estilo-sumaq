"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Package, Settings } from "lucide-react";
import { useState } from "react";

interface MyAccountLayoutProps {
  children: React.ReactNode;
  ordersInfo: React.ReactNode;
}

export default function MyAccountLayout(props: MyAccountLayoutProps) {
  const [activeTab, setActiveTab] = useState("profile");
  // const recentPurchases = [
  //   { id: "1", date: "10 de Junio, 2023", total: 129.99, status: "Entregado" },
  //   { id: "2", date: "25 de Mayo, 2023", total: 79.5, status: "En camino" },
  //   { id: "3", date: "5 de Mayo, 2023", total: 199.99, status: "Procesando" },
  // ];
  return (
    // <div>
    //   {props.children}
    //   {props.userInfo}
    //   {props.ordersInfo}
    // </div>

    <div className="min-h-screen bg-[#F7F3EB] text-[#4A4238]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">USUARIO</div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 bg-[#E5DED5]">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-[#8C7851] data-[state=active]:text-white"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Perfil
                </TabsTrigger>
                <TabsTrigger
                  value="purchases"
                  className="data-[state=active]:bg-[#8C7851] data-[state=active]:text-white"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Compras
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="data-[state=active]:bg-[#8C7851] data-[state=active]:text-white"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Ajustes
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold">
                      Información del Perfil
                    </h3>
                    {/* <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-[#7D7468]">Nombre</p>
                      <p>{user.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#7D7468]">Email</p>
                      <p>{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#7D7468]">Miembro desde</p>
                      <p>{user.joinDate}</p>
                    </div>
                  </div> */}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="purchases" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold">
                      Compras Recientes
                    </h3>
                    <div className="space-y-4">{props.ordersInfo}</div>
                  </CardContent>
                </Card>
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-semibold">
                    Productos Comprados
                  </h3>
                  {/* <ProductList /> */}
                </div>
              </TabsContent>
              <TabsContent value="settings" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold">
                      Ajustes de la Cuenta
                    </h3>
                    <p>
                      Aquí irían las opciones de configuración de la cuenta.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
}
