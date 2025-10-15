import os
from dotenv import load_dotenv
import psycopg2

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
print(f"📝 DATABASE_URL: {DATABASE_URL}\n")

try:
    # Extraer credenciales del URL
    url = DATABASE_URL.replace("postgresql://", "")
    user_pass, host_db = url.split("@")
    user, password = user_pass.split(":")
    host_port, database = host_db.split("/")
    host, port = host_port.split(":")
    
    print("🔍 Datos de conexión:")
    print(f"   Usuario: {user}")
    print(f"   Host: {host}")
    print(f"   Puerto: {port}")
    print(f"   Base de datos: {database}")
    print(f"   Password: {'*' * len(password)}\n")
    
    # Intentar conexión
    print("🔌 Conectando a PostgreSQL...")
    conn = psycopg2.connect(
        user=user,
        password=password,
        host=host,
        port=port,
        database=database
    )
    
    print("✅ ¡CONEXIÓN EXITOSA!\n")
    print("🎉 Tu base de datos está lista para usarse.")
    conn.close()
    
except Exception as e:
    print(f"❌ ERROR DE CONEXIÓN: {e}\n")
    print("🔧 Posibles soluciones:")
    print("   1. Verifica el password en el archivo .env")
    print("   2. Asegúrate que PostgreSQL esté corriendo")
    print("   3. Verifica que la base de datos 'fukusuke_db' exista en pgAdmin")