'use client';

import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldAlert, ShieldCheck } from 'lucide-react';

const LOGS = [
    { id: 'LOG-001', user: 'L. Bianchi', action: 'Condivisione Account', ip: '84.22.11.0', status: 'BLOCKED', time: '10:42 AM' },
    { id: 'LOG-002', user: 'M. Rossi', action: 'Accesso Reader', ip: '192.168.1.1', status: 'AUTHORIZED', time: '10:41 AM' },
    { id: 'LOG-003', user: 'G. Verdi', action: 'Download Immagine', ip: '45.33.22.1', status: 'BLOCKED', time: '10:39 AM' },
    { id: 'LOG-004', user: 'F. Neri', action: 'Login', ip: '10.0.0.5', status: 'AUTHORIZED', time: '10:35 AM' },
    { id: 'LOG-005', user: 'A. Gialli', action: 'Accesso Eventi', ip: '172.16.0.2', status: 'AUTHORIZED', time: '10:30 AM' },
];

export default function SecurityLogTable() {
    return (
        <Card className="col-span-4 lg:col-span-4 border-none shadow-xl bg-white/50 backdrop-blur-md">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-slate-900" />
                    Security Audit Log
                </CardTitle>
                <CardDescription>Monitoraggio minacce e accessi in tempo reale.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Utente</TableHead>
                            <TableHead>Azione</TableHead>
                            <TableHead className="hidden md:table-cell">IP Address</TableHead>
                            <TableHead>Stato</TableHead>
                            <TableHead className="text-right">Orario</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {LOGS.map((log) => (
                            <TableRow key={log.id} className={log.status === 'BLOCKED' ? 'bg-red-50/50 hover:bg-red-100/50' : ''}>
                                <TableCell className="font-mono font-medium text-xs text-slate-500">{log.id}</TableCell>
                                <TableCell className="font-medium">{log.user}</TableCell>
                                <TableCell>{log.action}</TableCell>
                                <TableCell className="hidden md:table-cell font-mono text-xs">{log.ip}</TableCell>
                                <TableCell>
                                    {log.status === 'BLOCKED' ? (
                                        <Badge variant="destructive" className="flex w-fit items-center gap-1">
                                            <ShieldAlert className="w-3 h-3" /> BLOCCATO
                                        </Badge>
                                    ) : (
                                        <Badge className="bg-emerald-500 hover:bg-emerald-600 flex w-fit items-center gap-1">
                                            <ShieldCheck className="w-3 h-3" /> AUTORIZZATO
                                        </Badge>
                                    )}
                                </TableCell>
                                <TableCell className="text-right text-slate-500">{log.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
