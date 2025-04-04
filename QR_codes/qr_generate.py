import qrcode
import os

BASE_URL="https://hospital-nav.com/end_point"
OUTPUT_DIR="generated_QR"

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

with open("nodes.txt","r") as file:
    node_ids=[line.strip() for line in file if line.strip().isdigit()]
    
for node_id in node_ids:
    qr_url=f"{BASE_URL}?from={node_id}"
    qr=qrcode.make(qr_url)
    qr_path = os.path.join(OUTPUT_DIR, f"qr_{node_id}.png")
    qr.save(qr_path)
    print(f"Generated QR code for NODE {node_id}: {qr_url} -> {qr_path}")
    