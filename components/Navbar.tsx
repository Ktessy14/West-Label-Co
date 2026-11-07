"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [{href:"/#capabilities",label:"Capabilities"},{href:"/#industries",label:"Industries"},{href:"/process",label:"Our process"},{href:"/request-sample",label:"Samples"}];
export default function Navbar(){
 const [open,setOpen]=useState(false);const path=usePathname();
 useEffect(()=>setOpen(false),[path]);
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};document.addEventListener("keydown",close);return()=>document.removeEventListener("keydown",close)},[]);
 return <header className="wl-nav"><nav className="wl-wrap wl-nav-row" aria-label="Main navigation"><Link href="/" className="wl-logo" aria-label="West Label Co home"><span className="wl-mark" aria-hidden="true">W</span><span>WEST LABEL<span className="wl-logo-small">CO. / PERTH, WA</span></span></Link><div className="wl-desktop">{links.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}</div><Link href="/contact" className="wl-button wl-nav-cta">Let’s talk labels <ArrowUpRight size={16}/></Link><button className="wl-menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?"Close menu":"Open menu"}>{open?<X/>:<Menu/>}</button></nav>{open&&<nav id="mobile-navigation" className="wl-mobile" aria-label="Mobile navigation">{[...links,{href:"/contact",label:"Request a quote"}].map(l=><Link onClick={()=>setOpen(false)} key={l.href} href={l.href}>{l.label}<ArrowUpRight size={16}/></Link>)}</nav>}</header>
}
