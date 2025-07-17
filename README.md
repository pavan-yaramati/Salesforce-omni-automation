# 📦 Salesforce Omni-Channel Custom Routing: One Case at a Time

This project demonstrates a fully custom case routing logic in Salesforce Omni-Channel that restricts agents to **one active case at a time**, regardless of their configured capacity.

---

## 🚀 Key Features

✅ Accepts only **one assigned case**  
✅ Automatically flips agent status to **Busy** after accepting  
✅ Other cases are **not declined** — they simply **timeout** and go back to the queue  
✅ When agent manually switches status back to **Ready**, they're eligible again  
✅ All logic implemented using **Aura component + omniToolkitAPI**  
✅ Works with **auto-accept enabled**  
✅ Requires **no Apex** or server-side code  
✅ Compatible with custom presence statuses and short push timeout settings  

---

## 🔧 How It Works

1. Agent sets Omni-Channel status to `Ready`.
2. Omni-Channel assigns **multiple cases** (e.g., if capacity is 5).
3. The Aura component intercepts all assignments via `onWorkAssigned`.
4. The component **accepts only the first case** using `omniToolkitAPI.acceptAgentWork`.
5. Then it calls `setServicePresenceStatus({ statusName: "Busy" })` to stop further routing.
6. All remaining cases are **left unaccepted**, and they **timeout** (after 10s or your configured value) and return to the queue.
7. When the agent switches status back to `Ready`, the logic resets and allows another case to be routed.

---

## 📋 Manual Setup Instructions

### 🔹 Step 1: Enable Omni-Channel

- Go to **Setup > Omni-Channel Settings**
- Enable Omni and add presence statuses like `Ready`, `Busy`

### 🔹 Step 2: Define Push Timeout

- Go to **Setup > Presence Configurations**
- Set `Push Time-Out` to `10 seconds` (recommended for quick reassignment)

### 🔹 Step 3: Add Presence Statuses

- Status `Ready` (routing enabled)
- Status `Busy` (routing paused)

### 🔹 Step 4: Enable Auto-Accept

- In **Service Channels**, set the channel to **Auto-Accept = True**

### 🔹 Step 5: Create Utility Bar Component

- Go to **App Manager > Your Console App > Edit**
- Add **OmniRoutingHandler** (custom Aura component) to the Utility Bar
- Set `Start Automatically = True`

### 🔹 Step 6: Assign Presence Config to Users

- Add users to the presence configuration that includes `Ready` and `Busy`

---

## 🧩 Component Files


---

## 📘 Use Cases

This is ideal for:
- Tier 1 support teams that want to control agent workload strictly
- Avoiding SLA breaches by reducing context switching
- Overriding the default Salesforce capacity behavior

---

## 👨‍💻 Author

Pavan Kumar Yaramati
Salesforce Developer | Omni-Channel Architect | 8x Certified  
[GitHub: pavan-yaramati](https://github.com/pavan-yaramati)

---

## 📄 License

MIT — Free to use, fork, modify. Attribution appreciated.
