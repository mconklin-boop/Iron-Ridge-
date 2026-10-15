export const departments = ["Shop equipment", "Air equipment", "Truck & trailer", "Pressure washers & pumps", "Generators & power", "Maintenance supplies"] as const;
export type Department = typeof departments[number];
export type Product = { id: string; slug: string; name: string; category: Department; description: string; request: string; };
const assortment: [Department, [string, string, string][]][] = [
["Shop equipment", [
["3-ton low-profile floor jack", "A low-clearance lifting option for passenger vehicles and light trucks.", "Vehicle weight, ground clearance and required lift height"],
["6-ton jack stand pair", "Matched support stands for appropriately rated vehicle service work.", "Vehicle weight and required support height"],
["1,000-lb transmission jack", "A transmission handling option for shop removal and installation work.", "Transmission weight, lift arrangement and adapter needs"],
["20-ton hydraulic shop press", "A shop press for bearing, bushing and general pressing work.", "Workpiece dimensions, working clearance and capacity"],
["20-gallon rolling oil drain", "Mobile collection for oil changes beneath a vehicle lift.", "Drain height, evacuation method and fluid compatibility"],
["2-ton folding engine crane", "A folding shop crane for engine removal and component handling.", "Load weight and required boom reach; capacity varies by reach"],
["1,500-lb engine stand", "An engine support stand for teardown and assembly.", "Engine weight, mounting pattern and rotation needs"],
["12-ton bottle jack", "A compact hydraulic lifting option for suitable support points.", "Load, closed height, lift range and manufacturer limitations"],
["Heavy-duty mechanic creeper", "A rolling creeper for under-vehicle access.", "User capacity, clearance and working surface"],
["Portable battery charger / engine starter", "A shop charging and starting support option.", "Battery voltage, chemistry and charging/starting requirements"]]],
["Air equipment", [
["20-gallon portable air compressor", "Portable compressed air for suitable tools and service tasks.", "Tool CFM at operating pressure, duty cycle and electrical supply"],
["60-gallon stationary air compressor", "A stationary shop air option for a dedicated workspace.", "Required CFM, voltage, phase and installation location"],
["1/2-inch pneumatic impact wrench", "An everyday air impact option for automotive service.", "Torque requirements, airline supply and socket drive"],
["3/4-inch pneumatic impact wrench", "A larger-drive air impact option for heavier fasteners.", "Required torque, air volume and service application"],
["3/8-inch pneumatic ratchet", "An air ratchet for suitable assembly and service work.", "Working torque, access clearance and air supply"],
["3/8-inch × 50-ft air hose", "A flexible hose option for shop or mobile air service.", "Working pressure, fittings and environment"],
["Retractable air hose reel", "Wall or ceiling hose storage for a cleaner work area.", "Hose length, inlet fittings, pressure and mounting location"],
["Air filter / regulator assembly", "Air preparation for compatible shop equipment.", "Flow, pressure, port size and tool requirements"]]],
["Truck & trailer", [
["2-inch × 27-ft ratchet strap", "Cargo securement for compatible loads and attachment points.", "Required working load limit, hook style and quantity"],
["3/8-inch × 20-ft Grade 70 transport chain", "Transport chain for appropriate load securement applications.", "Working load limit, end fittings and applicable load requirements"],
["3/8-inch ratchet load binder", "A chain tensioning option for compatible transport chain.", "Chain size/grade and required working load limit"],
["Heavy-duty wheel chock pair", "Wheel restraint for suitable tires and operating surfaces.", "Tire diameter, vehicle weight and ground conditions"],
["Magnetic towing light kit", "A removable lighting option for compatible towing applications.", "Connector, power supply, mounting surface and lighting requirements"],
["LED trailer light kit", "Replacement trailer lighting selected for your trailer layout.", "Trailer dimensions, voltage, mounting and required functions"],
["7-way trailer plug and junction box", "A connection and wiring organization option for trailers.", "Connector standard, wiring layout and weather exposure"],
["Rechargeable magnetic work light", "Portable task lighting for roadside and shop work.", "Runtime, mounting, brightness and charging preferences"]]],
["Pressure washers & pumps", [
["3,200-PSI gas pressure washer", "A gas-powered cleaning option for compatible surfaces.", "Required pressure/flow, cleaning task and duty cycle"],
["4,000-PSI commercial pressure washer", "A higher-pressure option for demanding cleaning work.", "Flow, pump type, duty cycle and surface requirements"],
["15-inch pressure washer surface cleaner", "A surface-cleaning attachment for a compatible washer.", "Washer GPM/PSI and connection compatibility"],
["50-ft replacement pressure washer hose", "A replacement or extension hose selected to match the washer.", "Pressure rating, temperature, diameter and end fittings"],
["2-inch semi-trash water pump", "A dewatering option for water within the pump's solids limits.", "Fluid, debris size, suction lift and discharge head"],
["12-volt diesel transfer pump", "A fuel transfer option specifically matched to diesel service.", "Fuel compatibility, flow, power source and installation"]]],
["Generators & power", [
["Portable tri-fuel generator", "A portable power option using supported gasoline, propane or natural gas configurations.", "Running/starting loads, fuel source, outlets and operating altitude"],
["Portable inverter generator", "An inverter power option for portable and jobsite applications.", "Required continuous/starting watts, outlets and fuel"],
["Commercial portable generator", "A portable power option selected around your jobsite loads.", "Duty cycle, motor starting loads, outlets and fuel requirements"],
["30-amp generator extension cord", "A generator cord selected to match both power source and load.", "Connector configuration, length, voltage and current"],
["50-amp generator extension cord", "A heavier-current cord option for a compatible generator connection.", "Connector configuration, length, voltage and current"],
["Weather-resistant generator storage cover", "A fitted cover for storage of a cool, stopped generator.", "Generator dimensions; storage cover is not an operating enclosure"]]],
["Maintenance supplies", [
["Lever-action grease gun", "A lubrication tool for compatible cartridges and grease fittings.", "Cartridge format, hose style and pressure requirements"],
["Heavy-duty grease gun hose", "A replacement lubrication hose for a compatible grease gun.", "Pressure rating, thread size and length"],
["Manual fluid transfer pump", "A hand-operated transfer option matched to the intended fluid.", "Fluid compatibility, container and flow requirements"],
["Fluid extractor", "An extraction tool for compatible automotive service fluids.", "Fluid type, capacity and power source"],
["Heavy-duty filter wrench set", "A filter removal kit selected for your service applications.", "Filter sizes, access and wrench style"],
["Generator maintenance kit", "A model-matched kit for scheduled generator maintenance.", "Exact make, model, serial number and service interval"],
["Air compressor maintenance kit", "A model-matched compressor service kit.", "Exact compressor make/model, pump and maintenance interval"]]],
];
export const products: Product[] = assortment.flatMap(([category, items], group) => items.map(([name, description, request], index) => ({ id: `IRS-${group + 1}${String(index + 1).padStart(2, "0")}`, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), name, category, description, request })));
