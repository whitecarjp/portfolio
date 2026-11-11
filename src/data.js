export const profile = {
  name: 'Jahna Patricia Poticar', initials: 'JP', location: 'Cebu City, Philippines',
  headline: 'I build, troubleshoot & secure the systems people rely on.',
  intro: 'IT support professional with hands-on experience in systems administration, network infrastructure, and technical operations across local and international environments.',
  email: 'jahnapatricia@gmail.com', linkedin: 'https://www.linkedin.com/in/whitecarjp/', github: 'https://github.com/whitecarjp', resume: '/Poticar_Resume.pdf'
};
export const skills = [
  { category: 'Identity & Cloud', items: ['Microsoft 365', 'Entra ID', 'Active Directory', 'Google Workspace', 'MFA & access management'] },
  { category: 'Networks & Infrastructure', items: ['TCP/IP · DNS · DHCP', 'VPN & firewalls', 'Wireless access points', 'Synology NAS', 'Internet failover'] },
  { category: 'Support & Operations', items: ['Freshdesk', 'SyncroMSP', 'Remote troubleshooting', 'Incident triage', 'Knowledge-base documentation'] },
  { category: 'Security & Development', items: ['Huntress', 'Cisco cybersecurity training', 'Python fundamentals', 'JavaScript / React', 'Git & GitHub'] }
];
export const projects = [
  { 
    id: 'fes-research', 
    type: 'RESEARCH', 
    title: 'Functional electrical stimulation assistive device', 
    description: 'Computer Engineering research exploring a finger-flexion assistive device using functional electrical stimulation.', 
    stack: ['Embedded Systems', 'Assistive Tech', 'Research'], 
    detail: 'Academic research into system design and implementation of a functional electrical stimulation-based finger flexion assistive device. Presented in an engineering research setting; do not interpret this prototype as a clinically validated medical device.' ,
    videos: [
      { src: '/videos/fes-gui.mp4', title: 'Electrode Control Interface', description: 'A walkthrough of the desktop interface we built to control the 24-electrode matrix. Each electrode in the 3×8 grid can be set to A, B, or Off with radio buttons. A layout can also be loaded from a configuration text file with Read, so a set stimulation pattern can be reused between sessions. Update shows which electrodes are active, and Clear turns them all off. An amplitude field lets the operator type in the stimulation level, and the Max button stops the stimulation signal from rising any further.'},
      { src: '/videos/fes-switching.mp4', title: 'Switching Circuit Bench Test', description: 'A bench check of one switching sub-module, done before connecting the electrodes. The Analog Discovery 2 powers the board at 5 V and generates 1 Hz and 2 Hz square waves, which go to outputs E4 and E3 and are shown on LEDs. Halfway through, the relays swap the two signals between the outputs. That confirmed the MCP23S17 and reed-relay circuit could reroute stimulation signals between electrodes. Each sub-module handles 8 electrodes, and three of them cascade to cover all 24.'}
    ]
  },
  {
    id: 'bellavous-cctv',
    type: 'FIELD ENGINEERING',
    title: 'Bellavous CCTV Installation',
    description: 'Planned and installed a 4-camera Dahua CCTV system for a commercial salon in Cebu, including cabling, a 12V 8A fused power distribution box, front-desk monitoring, and remote viewing.',
    stack: ['CCTV', 'Dahua', 'Power Distribution', 'Cabling', 'Remote Access'],
    detail: 'Planned and installed a 4-camera Dahua CCTV system for a commercial salon in Cebu. Mounted indoor and outdoor bullet cameras, and ran and managed the cable lines. Wired a 12V 8A fused power distribution box that feeds each camera on its own channel. Set up the recorder with a live multi-channel monitoring view at the front desk, and configured remote and mobile viewing.',
    images: [
      { src: '/projects/bellavous/monitor.webp', alt: 'Front-desk monitor showing the live multi-channel Dahua camera view for the Bellavous salon.' },
      { src: '/projects/bellavous/ladder-mount.webp', alt: 'Jp on a ladder mounting an outdoor bullet camera at the salon.' },
      { src: '/projects/bellavous/power-box-open.webp', alt: 'Opened 12V power distribution box with green channel LEDs lit, next to the AC/DC adapter.' },
      { src: '/projects/bellavous/power-box-mounted.webp', alt: 'Finished wall-mounted power distribution box with coiled cable runs below it.' }
    ]
  },
  {
    id: 'starlink-failover',
    type: 'SECURITY / NETWORKS',
    title: 'Starlink Failover Installation',
    description: 'Installed a Starlink dish as a failover internet link for a waterfront port-side site and integrated it with the site\'s Clavister firewall, so the failover link tunnels back to the Manila site.',
    stack: ['Starlink', 'Clavister', 'Firewall', 'WAN Failover', 'VPN Tunnel', 'Networking'],
    detail: 'Installed a Starlink dish as a failover internet link for a waterfront port-side site and integrated it with the site\'s Clavister firewall. Bypassed the Starlink router so the dish ran over a direct LAN connection into the firewall\'s LAN2 interface, then reconfigured the firewall so the failover link tunnels back to the Manila site. Mounted the dish on a pole bracket and routed the cable through conduit, then verified the placement with Starlink\'s obstruction check, which showed a clear view and a good experience for streaming, browsing, video calls, and gaming.',
    images: [
      { src: '/projects/starlink/aerial-water.webp', alt: 'Aerial view of the Starlink dish on the rooftop parapet beside the water.' },
      { src: '/projects/starlink/wall-mount.webp', alt: 'Starlink dish on a pole bracket, with the cable routed through conduit down the wall.' },
      { src: '/projects/starlink/aerial-port.webp', alt: 'Aerial view of the Starlink dish on the parapet, with the port and harbor beyond the roof.' },
      { src: '/projects/starlink/aerial-roof.webp', alt: 'Aerial view of the Starlink dish on the rooftop beside the waterfront.' },
      { src: '/projects/starlink/obstruction-check.webp', alt: 'Starlink obstruction check showing a clear view and a good experience for streaming, browsing, video calls, and gaming.' }
    ]
  },
  {
    id: 'office-cable-restructuring',
    type: 'INFRASTRUCTURE',
    title: 'Office Network Cable Restructuring',
    description: 'Restructured the office structured cabling: rack work across the patch panels, a TP-Link switch, the ISP router, an ASUS router, and a Clavister firewall, with desk-drop testing and under-desk tray cleanup.',
    stack: ['Structured Cabling', 'Cat6/RJ45', 'Cable Testing', 'Patch Panel', 'Troubleshooting'],
    detail: 'Restructured the office\'s structured cabling. Worked in the network rack, which holds the patch panels, a TP-Link switch, the ISP router, an ASUS router, and a Clavister firewall. Traced and tested each desk drop with a NOYAFA NF-8508 cable tester. Continuity and wiremap tests found open cables, shorts, and miswired or split pairs on several runs. Worked through the under-desk cable trays to clean up and reroute the runs.',
    images: [
      { src: '/projects/cabling/rack.webp', alt: 'Network rack behind its glass door, with patch panels, a TP-Link switch, the ISP router, an ASUS router, and a Clavister firewall.' },
      { src: '/projects/cabling/cable-tray.webp', alt: 'Under-desk cable tray with the runs being cleaned up and rerouted.' },
      { src: '/projects/cabling/tester-open.webp', alt: 'NOYAFA NF-8508 cable tester showing an open cable.' },
      { src: '/projects/cabling/tester-short.webp', alt: 'NOYAFA NF-8508 cable tester showing a short.' },
      { src: '/projects/cabling/tester-crossed.webp', alt: 'NOYAFA NF-8508 wiremap showing a crossed pair.' },
      { src: '/projects/cabling/tester-miswire.webp', alt: 'NOYAFA NF-8508 wiremap showing a miswired cable.' }
    ]
  },
  {
    id: 'ivr-echo-fix',
    type: 'IT OPERATIONS',
    title: 'IVR Configuration & IP Phone Echo Fix',
    description: 'Converted the voice prompt files to the format the phone system requires, configured the IVR, built the call flow, and ran end-user testing. Fixed an echo problem on the Yealink IP phones, tuning the T30P Voice settings and working across the Cisco and D-Link voice network and the desk drops.',
    stack: ['VoIP', 'IVR', 'Call Flow', 'UAT', 'Yealink', 'SIP', 'Cisco', 'Troubleshooting'],
    detail: 'Converted the voice prompt files to the format the phone system requires, configured the IVR, built the call flow, and ran end-user testing. Fixed an echo problem on the Yealink IP phones. Troubleshot through the Yealink T30P web interface\'s Voice settings, which cover echo cancellation, VAD, comfort noise, the adaptive jitter buffer, and noise suppression and smart noise block, and tuned those settings to clear up the echo. Worked across the voice network as well: the rack with Cisco 1800 series routers, a Cisco Catalyst 2960 Plus switch, and a D-Link switch, plus the desk drops feeding the phones.',
    images: [
      { src: '/projects/voip/rack.webp', alt: 'Open wall rack with a patch panel, a D-Link switch, a Cisco Catalyst 2960 Plus, and two Cisco 1800 series routers.' },
      { src: '/projects/voip/voice-settings.webp', alt: 'Yealink T30P Voice settings page, covering echo cancellation, VAD, comfort noise, the jitter buffer, and noise suppression.' },
      { src: '/projects/voip/yealink-desk.webp', alt: 'Yealink IP phone at a desk.' },
      { src: '/projects/voip/desk-drop.webp', alt: 'Desk wall jack with the patch cable and a coupler toward the phone.' }
    ]
  },
  {
    id: 'ap-tapo-cabling',
    type: 'FIELD ENGINEERING',
    title: 'Office Microsite Conversion & AP Installation',
    description: 'Converted the client\'s office into a microsite. The office no longer has direct network connections to the client\'s sites in Germany and Hong Kong, and users now reach those sites through Citrix. The work included a TP-Link EAP225-Outdoor ceiling access point, two Tapo C110 Wi-Fi cameras, and cable restructuring in the network corner and rack.',
    stack: ['Microsite', 'Citrix', 'Wi-Fi', 'Access Point', 'Tapo CCTV', 'Structured Cabling'],
    detail: 'Converted the client\'s office into a microsite. The office no longer has direct network connections to the client\'s sites in Germany and Hong Kong, and users now reach those sites through Citrix. As part of that work, installed a TP-Link EAP225-Outdoor (AC1200 MU-MIMO Gigabit) access point on the office ceiling to extend wireless coverage, installed two Tapo C110 Wi-Fi security cameras, and restructured the cabling in the network corner and wall rack, which holds the patch panel, D-Link and Cisco Catalyst switches, and Cisco routers. The routers sit on the shelf above the rack.',
    images: [
      { src: '/projects/ap/network-corner.webp', alt: 'Network corner with the access point on the ceiling, routers on the shelf, and the wall rack below.' },
      { src: '/projects/ap/ap-ceiling.webp', alt: 'TP-Link EAP225-Outdoor access point mounted on the office ceiling.' },
      { src: '/projects/ap/boxes.webp', alt: 'TP-Link EAP225-Outdoor and Tapo C110 boxes.' },
      { src: '/projects/ap/tapo-feed.webp', alt: 'Tapo C110 live view of the main entrance (people blurred).' },
      { src: '/projects/ap/tapo-mount.webp', alt: 'Tapo C110 mounted above the entrance.' }
    ]
  },
  {
    id: 'cyber-labs',
    type: 'SECURITY',
    title: 'Cybersecurity Labs (Cisco Junior Cybersecurity Analyst)',
    description: 'Completed the module\'s guided Packet Tracer and lab activities, including Investigate a Threat Landscape, Packet Tracer File and Data Integrity Checks, and Explore Social Engineering Techniques, and observed packet traffic in Wireshark.',
    stack: ['Cybersecurity', 'Cisco Packet Tracer', 'Threat Analysis', 'Data Integrity', 'Social Engineering', 'Wireshark'],
    detail: 'Completed the Cisco Junior Cybersecurity Analyst module\'s labs. These were guided Packet Tracer and lab activities: Investigate a Threat Landscape, Packet Tracer File and Data Integrity Checks, and Explore Social Engineering Techniques. Also observed packet traffic in Wireshark.',
    images: [
      { src: '/projects/cyber-labs/threat-landscape.webp', alt: 'Packet Tracer scenario for Investigate a Threat Landscape (ISP, data center, branch, cafe, home).' },
      { src: '/projects/cyber-labs/file-integrity.webp', alt: 'Packet Tracer scenario for File and Data Integrity Checks (HQ to branch via ISP).' }
    ]
  }
];
