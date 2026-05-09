import yaml
import sys
import re

with open('/home/khang/.gemini/antigravity/brain/c730d188-464f-4779-94fb-9de0c4bdb225/.system_generated/steps/73/output.txt') as f:
    content = f.read()
    
    # Extract YAML part
    match = re.search(r'(metadata:.*)', content, re.DOTALL)
    if match:
        yaml_content = match.group(1)
        data = yaml.safe_load(yaml_content)
        
        global_vars = data.get('globalVars', {})
        styles = global_vars.get('styles', {})
        fills = global_vars.get('fills', {})
        
        print("--- FILLS ---")
        for k, v in fills.items():
            print(f"{k}: {v}")
            
        print("\n--- STYLES ---")
        for k, v in styles.items():
            print(f"{k}: {v}")
            
