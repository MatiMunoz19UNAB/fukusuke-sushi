from app.database import SessionLocal
from app.models.user import User
from app.models.product import Category, Product
from app.models.banner import Banner
from app.core.security import get_password_hash

def seed_database():
    db = SessionLocal()
    
    try:
        print("🌱 Iniciando seed de la base de datos...")
        
        # ==================== USUARIOS ====================
        print("\n👤 Creando usuarios...")
        
        # Admin
        admin = User(
            email="admin@fukusuke.cl",
            password_hash=get_password_hash("admin123"),
            full_name="Administrador Fukusuke",
            phone="+56912345678",
            role="admin",
            is_active=True
        )
        db.add(admin)
        
        # Cliente de prueba
        cliente = User(
            email="cliente@test.cl",
            password_hash=get_password_hash("cliente123"),
            full_name="Cliente de Prueba",
            phone="+56987654321",
            role="cliente",
            is_active=True
        )
        db.add(cliente)
        
        db.commit()
        print("✅ Usuarios creados")
        
        # ==================== CATEGORÍAS ====================
        print("\n📁 Creando categorías...")
        
        categories_data = [
            {"name": "Rolls", "slug": "rolls", "order_position": 1},
            {"name": "Nigiri", "slug": "nigiri", "order_position": 2},
            {"name": "Sashimi", "slug": "sashimi", "order_position": 3},
            {"name": "Entradas", "slug": "entradas", "order_position": 4},
            {"name": "Combos", "slug": "combos", "order_position": 5},
        ]
        
        categories = []
        for cat_data in categories_data:
            category = Category(**cat_data, is_active=True)
            db.add(category)
            categories.append(category)
        
        db.commit()
        print("✅ Categorías creadas")
        
        # ==================== PRODUCTOS ====================
        print("\n🍱 Creando productos...")
        
        # Obtener IDs de categorías
        rolls_cat = db.query(Category).filter(Category.slug == "rolls").first()
        nigiri_cat = db.query(Category).filter(Category.slug == "nigiri").first()
        sashimi_cat = db.query(Category).filter(Category.slug == "sashimi").first()
        entradas_cat = db.query(Category).filter(Category.slug == "entradas").first()
        combos_cat = db.query(Category).filter(Category.slug == "combos").first()
        
        products_data = [
            {
                "name": "Roll California",
                "description": "Kanikama, palta, pepino y sésamo",
                "price": 4500,
                "category_id": rolls_cat.id,
                "image_url": "🍱",
                "rating": 4.8,
                "is_available": True
            },
            {
                "name": "Roll Philadelphia",
                "description": "Salmón, queso crema y cebollín",
                "price": 5500,
                "category_id": rolls_cat.id,
                "image_url": "🍣",
                "rating": 4.9,
                "is_available": True
            },
            {
                "name": "Nigiri Salmón",
                "description": "Arroz prensado con lámina de salmón fresco",
                "price": 3200,
                "category_id": nigiri_cat.id,
                "image_url": "🍣",
                "rating": 4.7,
                "is_available": True
            },
            {
                "name": "Sashimi Atún",
                "description": "Láminas de atún fresco (8 piezas)",
                "price": 7800,
                "category_id": sashimi_cat.id,
                "image_url": "🐟",
                "rating": 4.9,
                "is_available": True
            },
            {
                "name": "Roll Tempura",
                "description": "Camarón tempura, palta y salsa teriyaki",
                "price": 6200,
                "category_id": rolls_cat.id,
                "image_url": "🍤",
                "rating": 4.6,
                "is_available": True
            },
            {
                "name": "Gyoza",
                "description": "Empanaditas japonesas rellenas (6 unidades)",
                "price": 3800,
                "category_id": entradas_cat.id,
                "image_url": "🥟",
                "rating": 4.5,
                "is_available": True
            },
            {
                "name": "Roll Spicy Tuna",
                "description": "Atún picante, pepino y salsa sriracha",
                "price": 5800,
                "category_id": rolls_cat.id,
                "image_url": "🌶️",
                "rating": 4.7,
                "is_available": True
            },
            {
                "name": "Combo Fukusuke",
                "description": "20 piezas variadas + bebida incluida",
                "price": 12500,
                "category_id": combos_cat.id,
                "image_url": "🍱",
                "rating": 5.0,
                "is_available": True
            },
            {
                "name": "Roll Ebi Acevichado",
                "description": "Camarón, palta y salsa acevichada",
                "price": 5200,
                "category_id": rolls_cat.id,
                "image_url": "🦐",
                "rating": 4.8,
                "is_available": True
            },
            {
                "name": "Nigiri Atún",
                "description": "Arroz prensado con atún de calidad premium",
                "price": 3500,
                "category_id": nigiri_cat.id,
                "image_url": "🍣",
                "rating": 4.6,
                "is_available": True
            },
            {
                "name": "Sashimi Salmón",
                "description": "Láminas de salmón fresco (8 piezas)",
                "price": 7200,
                "category_id": sashimi_cat.id,
                "image_url": "🐟",
                "rating": 4.8,
                "is_available": True
            },
            {
                "name": "Edamame",
                "description": "Porotos de soja al vapor con sal de mar",
                "price": 2800,
                "category_id": entradas_cat.id,
                "image_url": "🫘",
                "rating": 4.4,
                "is_available": True
            }
        ]
        
        for prod_data in products_data:
            product = Product(**prod_data)
            db.add(product)
        
        db.commit()
        print("✅ Productos creados")
        
        # ==================== BANNERS ====================
        print("\n🎨 Creando banners...")
        
        banners_data = [
            {
                "title": "Promoción Verano",
                "image_url": "/images/portada1.png",
                "link_url": None,
                "order_position": 1,
                "is_active": True
            },
            {
                "title": "Nuevos Rolls",
                "image_url": "/images/portada2.png",
                "link_url": None,
                "order_position": 2,
                "is_active": True
            }
        ]
        
        for banner_data in banners_data:
            banner = Banner(**banner_data)
            db.add(banner)
        
        db.commit()
        print("✅ Banners creados")
        
        print("\n🎉 ¡Seed completado exitosamente!")
        print("\n📝 Credenciales de acceso:")
        print("   Admin:")
        print("   Email: admin@fukusuke.cl")
        print("   Password: admin123")
        print("\n   Cliente:")
        print("   Email: cliente@test.cl")
        print("   Password: cliente123")
        
    except Exception as e:
        print(f"\n❌ Error durante el seed: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()