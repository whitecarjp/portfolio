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
  { id: 'network-infrastructure', type: 'INFRASTRUCTURE', title: 'Multi-site network infrastructure', description: 'Network troubleshooting, access-point deployment, cabling improvements, and internet failover for business environments.', stack: ['Networking', 'Wi-Fi', 'Failover'], detail: 'Supported and improved business network environments through connectivity troubleshooting, access-point deployment, structured cabling, and backup connectivity planning. Project specifics are generalized to protect client information.' },
  { id: 'vpn-connectivity', type: 'SECURITY / NETWORKS', title: 'Site-to-site VPN connectivity', description: 'Firewall and VPN configuration and troubleshooting for connectivity between office locations.', stack: ['VPN', 'Firewall', 'Troubleshooting'], detail: 'Worked with Clavister firewall tunnel connectivity between Manila and Cebu, alongside remote-access VPN troubleshooting. Client-specific configurations and credentials are intentionally omitted.' },
  { id: 'cctv-deployment', type: 'FIELD ENGINEERING', title: 'CCTV & physical infrastructure', description: 'Camera installation, continuous-recording configuration, detection checks, and field cabling.', stack: ['CCTV', 'Installation', 'Testing'], detail: 'Installed and validated camera systems, including recording, detection and audio functionality, with attention to clean cabling and practical maintenance.' },
  { id: 'fes-research', type: 'RESEARCH', title: 'Functional electrical stimulation assistive device', description: 'Computer Engineering research exploring a finger-flexion assistive device using functional electrical stimulation.', stack: ['Embedded Systems', 'Assistive Tech', 'Research'], detail: 'Academic research into system design and implementation of a functional electrical stimulation-based finger flexion assistive device. Presented in an engineering research setting; do not interpret this prototype as a clinically validated medical device.' },
  { id: 'support-automation', type: 'IT OPERATIONS', title: 'Service desk & knowledge management', description: 'Ticket triage, SLA-focused support, and repeatable knowledge-base guides for common user issues.', stack: ['Freshdesk', 'Documentation', 'Microsoft 365'], detail: 'Supported multi-client ticket queues with approximately 90% SLA performance and documented recurring issues such as Adobe access, VPN connection, and account provisioning.' },
  { id: 'cloud-admin', type: 'SYSTEMS', title: 'Microsoft 365 & identity administration', description: 'User lifecycle administration, licensing, MFA, mailbox support, and identity troubleshooting.', stack: ['Microsoft 365', 'Entra ID', 'Active Directory'], detail: 'Handled day-to-day user provisioning, account recovery, licensing, MFA troubleshooting, and Microsoft 365 application support in professional IT environments.' },
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
      { src: '/projects/ap/boxes.webp', alt: 'TP-Link EAP225-Outdoor and Tapo C110 boxes.' }
    ]
  }
];
