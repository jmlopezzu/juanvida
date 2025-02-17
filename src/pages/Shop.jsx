import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { ShoppingCart } from 'lucide-react';

// Lista de productos de clases de yoga
const products = [
    {
        id: 1,
        name: "Clase de Yoga Personalizada",
        desc: "Sesiones exclusivas de yoga diseñadas para ti. Aprende y crece a tu ritmo con un instructor dedicado.",
        price: 120000,
        sessions: 1,
        images: ["juanch.jpeg", "equi.jpeg", "nature.jpeg", "manos.jpeg",]
    },
    {
        id: 2,
        name: "Clases Virtuales",
        desc: "Accede a clases virtuales de yoga una vez a la semana. Flexibilidad y comodidad desde tu hogar.",
        price: 150000,
        sessions: 4,
        images: ["malokaleer.jpeg", "natu.jpeg", "fireee.jpeg", "danza.jpeg"]
    },
    {
        id: 3,
        name: "Sesiones Grupales",
        desc: "Clases presenciales en grupo los miércoles y sábados. Conéctate con otros practicantes.",
        price: 150000,
        sessions: 8,
        images: ["grrrr.jpeg", "gruo.jpeg", "grups.jpeg", "grp.jpeg"]
    },
    {
        id: 4,
        name: "Una Sesion Grupal",
        desc: "Un momento perfecto para conectar contigo mismo y compartir en grupo los miércoles o sábados.",
        price: 25000,
        sessions: 1,
        images: ["juan.jpeg", "hermandad.jpeg","hot.jpeg", "iky.jpg"]
    },
    {
        id: 5,
        name: "Sesiones Grupales + Inmersión en Hielo",
        desc: "Mejora tu bienestar con yoga en grupo y sesiones de inmersión en hielo para fortalecer tu cuerpo y mente.",
        price: 200000,
        sessions: 10, // 8 yoga + 2 inmersión en hielo
        images: ["hielo.jpg", "agua.jpeg", "hieloo.jpeg", "hielo.jpeg"]
    },
    {
        id: 6,
        name: "Sesiones en la U Manizales",
        desc: "Una mente en paz se nutre de conocimiento facilmente, acercate al salón de yoga, con horarios flexibles y un ambiente relajado.",
        price: 25000,
        sessions: 1,
        images: ["um.jpeg"]
    }
];

// Formato de precios en COP
const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(price);
};

// Componente de Tarjeta de Producto
const ProductCard = ({ product, addItem, removeItem, itemQuantity, selectedImageIndex, setSelectedImageIndex, onShowCart }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow">
            {itemQuantity > 0 && (
                <div className="absolute top-2 right-2 bg-[var(--brown-2)] text-white px-3 py-1 rounded-full text-sm">
                    {itemQuantity} en tu orden
                </div>
            )}

            {/* Imagen principal del producto */}
            <img
                src={product.images[selectedImageIndex[product.id] || 0]}
                alt={product.name}
                className="w-full h-96 object-cover transition-opacity duration-300"
            />

            {/* Miniaturas de imágenes */}
            <div className="flex gap-2 p-4 overflow-x-auto">
                {product.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Vista ${index + 1}`}
                        className={`w-20 h-20 object-cover cursor-pointer rounded-lg border-2 ${(selectedImageIndex[product.id] || 0) === index ? 'border-[var(--brown-2)]' : 'border-transparent'
                            }`}
                        onClick={() => setSelectedImageIndex(prev => ({ ...prev, [product.id]: index }))}
                    />
                ))}
            </div>

            {/* Información del producto */}
            <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 text-[var(--brown-2)]">{product.name}</h3>
                <p className="text-[var(--faded-brown)] mb-4">{product.desc}</p>
                <p className="text-green-500 mb-4">Numero de clases = {product.sessions}</p>

                <div className="flex justify-between items-center">
                    <span className="font-bold text-[var(--green)]">{formatPrice(product.price)}</span>
                    <div className="flex items-center gap-2">
                        <Button onClick={() => removeItem(product.id)} variant="outline" className="border-[var(--brown-2)] text-[var(--brown-2)]">-</Button>
                        <span>{itemQuantity}</span>
                        <Button onClick={() => addItem({ id: product.id, name: product.name, price: product.price })} variant="outline" className="border-[var(--brown-2)] text-[var(--brown-2)]">+</Button>
                    </div>
                </div>

                {itemQuantity > 0 && (
                    <Button className="w-full mt-4" onClick={() => onShowCart()}>Ver orden actual</Button>
                )}
            </div>
        </div>
    );
};

// Componente principal de la tienda
const Shop = () => {
    const { addItem, removeItem, items } = useCartStore();
    const [showCart, setShowCart] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState({});

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);



    return (
        <div>
            <section className="py-20 bg-[var(--tan-2)] relative">

                {/* Botón flotante del carrito */}
                <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white p-4 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all" onClick={() => setShowCart(!showCart)}>
                    <ShoppingCart className={`h-6 w-6 ? ${totalItems > 1 ? 'text-red-500' : 'text-[var(--brown-2)]'}`}/>
                    <span className={`font-bold ${totalItems > 1 ? 'text-red-500' : 'text-[var(--brown-2)]'}`}>{totalItems}</span>
                </div>

                {/* Carrito de compras */}
                {showCart && (
                    <div className="fixed bottom-20 right-4 bg-white p-6 rounded-xl shadow-xl z-50 w-80 max-h-[60vh] overflow-y-auto">
                        <h3 className="text-xl font-bold mb-4">Tu Orden</h3>
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-3">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">x{item.quantity}</p>
                                </div>
                                <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                            </div>
                        ))}
                        <div className="border-t mt-4 pt-4">
                            <div className="flex justify-between font-bold">
                                <span>Total:</span>
                                <span>{formatPrice(totalAmount)}</span>
                            </div>
                            <Button
                                className="w-full mt-4 bg-green-600 hover:bg-green-700"
                                onClick={() => {
                                    const message = `¡Hola! Quiero comprar:%0A${items.map(item => `- ${item.name} x${item.quantity}: ${formatPrice(item.price * item.quantity)}`).join('%0A')
                                        }%0ATotal: ${formatPrice(totalAmount)}%0A¿Cómo puedo finalizar la compra?`;

                                    window.open(`https://wa.me/573204997492?text=${message}`, '_blank');
                                }}
                            >
                                Finalizar compra
                            </Button>
                        </div>
                    </div>
                )}

                {/* Listado de productos */}
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-10 text-[var(--brown)]">Clases de Yoga</h2>

                    {/* Grid con 2 columnas en todas las pantallas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                addItem={addItem}
                                removeItem={removeItem}
                                itemQuantity={items.find(item => item.id === product.id)?.quantity || 0}
                                selectedImageIndex={selectedImageIndex}
                                setSelectedImageIndex={setSelectedImageIndex}
                                onShowCart={() => setShowCart(true)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shop;
